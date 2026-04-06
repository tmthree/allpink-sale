import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductCard } from "@/components/features/product-card";
import { ProductFilter } from "@/components/features/product-filter";
import { getProductsByType } from "@/data/products";

export const metadata: Metadata = {
  title: "Sản phẩm hạt nhựa tái chế",
  description:
    "Danh mục hạt nhựa tái chế PP, PE, HDPE, LDPE — giá tốt, giao nhanh toàn quốc.",
};

type PageProps = {
  searchParams: Promise<{ loai?: string }>;
};

export default async function ProductsPage({ searchParams }: PageProps) {
  const { loai } = await searchParams;
  const filter = loai ?? "all";
  const products = getProductsByType(filter);

  const filterLabel =
    filter === "all" ? "Tất cả sản phẩm" : `Nhựa ${filter}`;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Sản phẩm hạt nhựa tái chế
        </h1>
        <p className="mt-2 text-gray-500">
          Cung cấp sỉ hạt nhựa PP, PE, HDPE, LDPE — giao hàng toàn quốc.
        </p>
      </div>

      {/* Filter */}
      <Suspense>
        <div className="mb-6">
          <ProductFilter />
        </div>
      </Suspense>

      {/* Count */}
      <p className="mb-4 text-sm text-gray-500">
        {filterLabel}: <span className="font-medium">{products.length} sản phẩm</span>
      </p>

      {/* Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 py-20 text-center text-gray-400">
          Không tìm thấy sản phẩm phù hợp.
        </div>
      )}
    </div>
  );
}
