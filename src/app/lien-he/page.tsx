import { Suspense } from "react";
import type { Metadata } from "next";
import { PhoneIcon, MapPinIcon, ClockIcon, BuildingIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ContactForm } from "@/components/features/contact-form";
import { CONTACT_INFO, BANK_INFO, ZALO_LINK } from "@/lib/constants";
import { formatPhone } from "@/lib/format";

export const metadata: Metadata = {
  title: "Liên hệ & Đặt hàng",
  description:
    "Liên hệ AllPink để nhận báo giá hạt nhựa tái chế. Phản hồi trong 30 phút.",
};

// Server component that reads search params for pre-selected product
type PageProps = {
  searchParams: Promise<{ "san-pham"?: string }>;
};

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const defaultProduct = params["san-pham"] ?? "";

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Liên hệ &amp; Đặt hàng
        </h1>
        <p className="mt-2 text-gray-500">
          Để lại thông tin và chúng tôi sẽ liên hệ trong vòng 30 phút.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Contact form */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-5">
            Gửi yêu cầu báo giá
          </h2>
          <Suspense>
            <ContactForm defaultProduct={defaultProduct} />
          </Suspense>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          {/* Direct contact */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Liên hệ trực tiếp
            </h2>

            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-3 rounded-lg border border-pink-200 bg-pink-50 px-4 py-3 text-pink-700 hover:bg-pink-100 transition-colors"
            >
              <PhoneIcon className="size-5 shrink-0" />
              <div>
                <p className="text-xs text-pink-500">Gọi điện</p>
                <p className="font-semibold">{formatPhone(CONTACT_INFO.phone)}</p>
              </div>
            </a>

            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-blue-700 hover:bg-blue-100 transition-colors"
            >
              <div className="size-5 shrink-0 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs font-bold">
                Z
              </div>
              <div>
                <p className="text-xs text-blue-500">Zalo</p>
                <p className="font-semibold">{formatPhone(CONTACT_INFO.zalo)}</p>
              </div>
            </a>

            <Separator />

            <div className="flex items-start gap-3 text-sm text-gray-600">
              <MapPinIcon className="size-5 mt-0.5 shrink-0 text-gray-400" />
              <div>
                <p className="font-medium text-gray-800 mb-0.5">Địa chỉ</p>
                <p>{CONTACT_INFO.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-600">
              <ClockIcon className="size-5 mt-0.5 shrink-0 text-gray-400" />
              <div>
                <p className="font-medium text-gray-800 mb-0.5">Giờ làm việc</p>
                <p>{CONTACT_INFO.workingHours}</p>
              </div>
            </div>
          </div>

          {/* Bank info */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2">
              <BuildingIcon className="size-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900">
                Thông tin chuyển khoản
              </h2>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Ngân hàng</span>
                <span className="font-medium">{BANK_INFO.bankName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Số tài khoản</span>
                <span className="font-mono font-semibold text-gray-900">
                  {BANK_INFO.accountNumber}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Chủ tài khoản</span>
                <span className="font-medium">{BANK_INFO.accountHolder}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Chi nhánh</span>
                <span className="font-medium">{BANK_INFO.branch}</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 pt-1">
              * Nội dung CK: Tên + SĐT + Sản phẩm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
