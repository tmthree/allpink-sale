import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatVND } from "@/lib/format";
import { Product } from "@/types/product";

// Map product color name to a Tailwind background class for placeholder
const COLOR_MAP: Record<string, string> = {
  Trắng: "bg-gray-100",
  "Xanh dương": "bg-blue-300",
  "Trong suốt": "bg-cyan-100",
  "Xanh lá": "bg-green-400",
  Đỏ: "bg-red-400",
  "Hỗn hợp": "bg-gradient-to-br from-blue-300 via-red-300 to-green-300",
  "Trắng đục": "bg-gray-200",
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const placeholderBg = COLOR_MAP[product.color] ?? "bg-gray-200";
  const inStock = product.stockKg > 0;

  return (
    <Card className="flex flex-col h-full hover:shadow-md transition-shadow">
      {/* Product image / placeholder */}
      <Link href={`/san-pham/${product.slug}`} className="block">
        <div
          className={`relative h-44 w-full rounded-t-xl ${placeholderBg} flex items-center justify-center`}
        >
          <span className="text-sm font-medium text-gray-600 opacity-60">
            {product.color}
          </span>
        </div>
      </Link>

      <CardHeader className="pb-1">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-sm leading-snug">
            <Link
              href={`/san-pham/${product.slug}`}
              className="hover:text-pink-600 transition-colors"
            >
              {product.name}
            </Link>
          </CardTitle>
          <Badge variant="secondary" className="shrink-0 text-xs">
            {product.plasticType}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-2">
        <p className="text-xs text-gray-500">Màu: {product.color}</p>
        <p className="text-lg font-bold text-pink-600">
          {formatVND(product.pricePerKg)}
          <span className="text-xs font-normal text-gray-500">/kg</span>
        </p>
        <p className="text-xs text-gray-500">
          Tồn kho:{" "}
          <span
            className={
              inStock ? "text-green-600 font-medium" : "text-red-500"
            }
          >
            {inStock
              ? `${product.stockKg.toLocaleString("vi-VN")} kg`
              : "Hết hàng"}
          </span>
        </p>
      </CardContent>

      <CardFooter className="pt-3">
        <Link
          href={`/san-pham/${product.slug}`}
          className="w-full inline-flex items-center justify-center rounded-md bg-pink-600 hover:bg-pink-700 text-white h-8 px-3 text-sm font-medium transition-colors"
        >
          Xem chi tiết
        </Link>
      </CardFooter>
    </Card>
  );
}
