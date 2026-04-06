import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeftIcon,
  CheckIcon,
  PhoneIcon,
  PackageIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products, getProductBySlug } from "@/data/products";
import { formatVND, formatPhone } from "@/lib/format";
import { CONTACT_INFO, ZALO_LINK } from "@/lib/constants";

// Map color names to placeholder background classes
const COLOR_MAP: Record<string, string> = {
  Trắng: "bg-gray-100",
  "Xanh dương": "bg-blue-300",
  "Trong suốt": "bg-cyan-100",
  "Xanh lá": "bg-green-400",
  Đỏ: "bg-red-400",
  "Hỗn hợp": "bg-gradient-to-br from-blue-300 via-red-300 to-green-300",
  "Trắng đục": "bg-gray-200",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  return {
    title: product.name,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const placeholderBg = COLOR_MAP[product.color] ?? "bg-gray-200";
  const inStock = product.stockKg > 0;
  const orderLink = `/lien-he?san-pham=${encodeURIComponent(product.plasticType)}`;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <Link
        href="/san-pham"
        className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-pink-600 mb-6 transition-colors"
      >
        <ArrowLeftIcon className="size-3.5" />
        Quay lại danh sách sản phẩm
      </Link>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Image placeholder */}
        <div
          className={`h-80 md:h-full min-h-72 rounded-2xl ${placeholderBg} flex items-center justify-center`}
        >
          <div className="text-center">
            <PackageIcon className="mx-auto size-16 text-gray-400 opacity-50" />
            <p className="mt-2 text-sm text-gray-500">{product.color}</p>
          </div>
        </div>

        {/* Product info */}
        <div className="flex flex-col gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">{product.plasticType}</Badge>
              <Badge
                variant={inStock ? "default" : "destructive"}
                className={
                  inStock ? "bg-green-100 text-green-700 border-green-200" : ""
                }
              >
                {inStock ? "Còn hàng" : "Hết hàng"}
              </Badge>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          <Separator />

          {/* Specs */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <p className="text-gray-500">Màu sắc</p>
              <p className="font-medium">{product.color}</p>
            </div>
            <div>
              <p className="text-gray-500">Loại nhựa</p>
              <p className="font-medium">{product.plasticType}</p>
            </div>
            <div>
              <p className="text-gray-500">Đặt hàng tối thiểu</p>
              <p className="font-medium">
                {product.minOrderKg.toLocaleString("vi-VN")} kg
              </p>
            </div>
            <div>
              <p className="text-gray-500">Tồn kho</p>
              <p className="font-medium">
                {product.stockKg.toLocaleString("vi-VN")} kg
              </p>
            </div>
          </div>

          {/* Price */}
          <div className="rounded-xl bg-pink-50 px-5 py-4">
            <p className="text-sm text-gray-500">Giá bán</p>
            <p className="text-3xl font-bold text-pink-600">
              {formatVND(product.pricePerKg)}
              <span className="text-base font-normal text-gray-500">/kg</span>
            </p>
            <p className="mt-1 text-xs text-gray-400">
              * Giá có thể thay đổi theo số lượng. Liên hệ để nhận báo giá tốt hơn.
            </p>
          </div>

          {/* Features */}
          {product.features.length > 0 && (
            <div>
              <p className="text-sm font-semibold text-gray-700 mb-2">
                Đặc điểm nổi bật
              </p>
              <ul className="space-y-1">
                {product.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <CheckIcon className="size-4 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={orderLink}
              className="flex-1 inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-pink-700 text-white h-10 px-4 text-sm font-medium transition-colors"
            >
              Đặt hàng ngay
            </Link>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center rounded-md border border-blue-400 text-blue-600 hover:bg-blue-50 h-10 px-4 text-sm font-medium transition-colors"
            >
              Liên hệ Zalo
            </a>
          </div>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-pink-600 transition-colors"
          >
            <PhoneIcon className="size-4" />
            Gọi {formatPhone(CONTACT_INFO.phone)}
          </a>
        </div>
      </div>
    </div>
  );
}
