"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GOOGLE_SHEETS_WEBHOOK_URL, PLASTIC_TYPES } from "@/lib/constants";

// Zod v4 schema — use `error` instead of `invalid_type_error`
const schema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Số điện thoại phải đúng 10 chữ số"),
  productInterest: z.string().optional(),
  quantityKg: z
    .number({ error: "Vui lòng nhập số lượng hợp lệ" })
    .positive("Số lượng phải lớn hơn 0"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormData, string>>;

type Props = {
  defaultProduct?: string;
};

export function ContactForm({ defaultProduct = "" }: Props) {
  const [form, setForm] = useState<
    Omit<FormData, "quantityKg"> & { quantityKg: string }
  >({
    name: "",
    phone: "",
    productInterest: defaultProduct,
    quantityKg: "",
    notes: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({
      ...form,
      quantityKg: form.quantityKg ? Number(form.quantityKg) : undefined,
    });

    if (!result.success) {
      // Zod v4 uses .issues instead of .errors
      const fieldErrors: FieldErrors = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormData;
        if (field && !fieldErrors[field]) fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("loading");
    try {
      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          body: JSON.stringify(result.data),
        });
      }
      setStatus("success");
      setForm({
        name: "",
        phone: "",
        productInterest: "",
        quantityKg: "",
        notes: "",
      });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-700">Gửi thành công!</p>
        <p className="mt-1 text-sm text-green-600">
          Chúng tôi sẽ liên hệ lại trong vòng 30 phút.
        </p>
        <Button
          className="mt-4"
          variant="outline"
          onClick={() => setStatus("idle")}
          size="sm"
        >
          Gửi yêu cầu khác
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Họ tên <span className="text-red-500">*</span>
        </label>
        <Input
          placeholder="Nguyễn Văn A"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Số điện thoại <span className="text-red-500">*</span>
        </label>
        <Input
          placeholder="0901234567"
          inputMode="numeric"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="text-xs text-red-500">{errors.phone}</p>
        )}
      </div>

      {/* Product interest */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Sản phẩm quan tâm
        </label>
        <select
          className="flex h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/50"
          value={form.productInterest}
          onChange={(e) => update("productInterest", e.target.value)}
        >
          <option value="">-- Chọn loại nhựa --</option>
          {PLASTIC_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      {/* Quantity */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">
          Số lượng (kg) <span className="text-red-500">*</span>
        </label>
        <Input
          placeholder="VD: 500"
          inputMode="numeric"
          value={form.quantityKg}
          onChange={(e) => update("quantityKg", e.target.value)}
          aria-invalid={!!errors.quantityKg}
        />
        {errors.quantityKg && (
          <p className="text-xs text-red-500">{errors.quantityKg}</p>
        )}
      </div>

      {/* Notes */}
      <div className="space-y-1">
        <label className="text-sm font-medium text-gray-700">Ghi chú</label>
        <Textarea
          placeholder="Yêu cầu cụ thể, địa chỉ giao hàng..."
          rows={3}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Có lỗi xảy ra. Vui lòng gọi điện trực tiếp.
        </p>
      )}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white"
      >
        {status === "loading" ? "Đang gửi..." : "Gửi yêu cầu báo giá"}
      </Button>
    </form>
  );
}
