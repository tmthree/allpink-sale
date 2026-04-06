import Link from "next/link";
import {
  TruckIcon,
  BadgeCheckIcon,
  LeafIcon,
  PhoneIcon,
  ArrowRightIcon,
  PackageIcon,
  ScissorsIcon,
  BoxIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/features/product-card";
import { getFeaturedProducts } from "@/data/products";
import { CONTACT_INFO, ZALO_LINK } from "@/lib/constants";
import { formatPhone } from "@/lib/format";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hạt nhựa tái chế PP, PE, HDPE — Giá tốt, Giao nhanh",
};

const STEPS = [
  { icon: PackageIcon, label: "Thu mua", desc: "Nhựa phế liệu các loại" },
  { icon: ScissorsIcon, label: "Xay", desc: "Xay thành hạt nhỏ đều" },
  { icon: BoxIcon, label: "Đóng bao", desc: "Đóng bao 25kg/50kg" },
  { icon: TruckIcon, label: "Giao hàng", desc: "Giao toàn quốc" },
];

const WHY_US = [
  {
    icon: BadgeCheckIcon,
    title: "Giá cạnh tranh",
    desc: "Trực tiếp từ xưởng, không qua trung gian — giá tốt nhất thị trường.",
  },
  {
    icon: LeafIcon,
    title: "Chất lượng ổn định",
    desc: "Hạt nhựa đồng nhất, sạch, phù hợp dây chuyền sản xuất công nghiệp.",
  },
  {
    icon: TruckIcon,
    title: "Giao hàng nhanh",
    desc: "Có sẵn hàng, giao trong ngày khu vực TP.HCM và tỉnh lân cận.",
  },
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-white py-20 px-4">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hạt nhựa tái chế{" "}
            <span className="text-pink-600">PP · PE · HDPE</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Chuyên cung cấp hạt nhựa tái chế chất lượng cao. Thu mua phế liệu —
            Xay hạt — Đóng bao — Giao hàng toàn quốc.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/san-pham"
              className="inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-pink-700 text-white px-8 h-10 text-sm font-medium transition-colors"
            >
              Xem sản phẩm <ArrowRightIcon className="ml-2 size-4" />
            </Link>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-blue-400 text-blue-600 hover:bg-blue-50 h-10 px-8 text-sm font-medium transition-colors"
            >
              Liên hệ Zalo
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Quy trình sản xuất
          </h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-pink-100">
                  <step.icon className="size-8 text-pink-600" />
                </div>
                <div className="flex size-6 items-center justify-center rounded-full bg-pink-600 text-white text-xs font-bold">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{step.label}</p>
                  <p className="text-sm text-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Sản phẩm nổi bật
            </h2>
            <Link
              href="/san-pham"
              className="text-sm text-pink-600 hover:underline flex items-center gap-1"
            >
              Xem tất cả <ArrowRightIcon className="size-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-10">
            Tại sao chọn AllPink?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {WHY_US.map((item) => (
              <Card key={item.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-pink-100">
                    <item.icon className="size-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-pink-600 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold mb-3">
            Liên hệ ngay để nhận báo giá tốt nhất
          </h2>
          <p className="text-pink-100 mb-8">
            Đội ngũ sẵn sàng tư vấn và báo giá trong vòng 30 phút.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center rounded-md border border-white bg-white text-pink-600 hover:bg-pink-50 h-10 px-8 text-sm font-medium transition-colors"
            >
              <PhoneIcon className="mr-2 size-4" />
              {formatPhone(CONTACT_INFO.phone)}
            </a>
            <a
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white h-10 px-8 text-sm font-medium transition-colors"
            >
              Nhắn Zalo ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
