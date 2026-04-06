import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Hạt nhựa PP trắng",
    slug: "hat-nhua-pp-trang",
    description:
      "Hạt nhựa PP (Polypropylene) màu trắng tinh khiết, được xay từ rổ nhựa trắng chất lượng cao. Phù hợp sản xuất đồ gia dụng, bao bì, ống nhựa.",
    plasticType: "PP",
    color: "Trắng",
    pricePerKg: 12000,
    minOrderKg: 100,
    stockKg: 5000,
    imageUrl: "/images/products/pp-trang.svg",
    isActive: true,
    features: ["Độ sạch cao", "Hạt đồng nhất", "Dễ gia công"],
  },
  {
    id: "2",
    name: "Hạt nhựa PP xanh dương",
    slug: "hat-nhua-pp-xanh-duong",
    description:
      "Hạt nhựa PP màu xanh dương, xay từ rổ nhựa đựng trái cây. Thích hợp sản xuất thùng chứa, pallet, đồ nhựa công nghiệp.",
    plasticType: "PP",
    color: "Xanh dương",
    pricePerKg: 10000,
    minOrderKg: 100,
    stockKg: 3000,
    imageUrl: "/images/products/pp-xanh-duong.svg",
    isActive: true,
    features: ["Giá tốt", "Số lượng lớn", "Màu đều"],
  },
  {
    id: "3",
    name: "Hạt nhựa PE trong",
    slug: "hat-nhua-pe-trong",
    description:
      "Hạt nhựa PE (Polyethylene) trong suốt, nguyên liệu lý tưởng cho sản xuất túi nilon, màng bọc thực phẩm, ống dẫn nước.",
    plasticType: "PE",
    color: "Trong suốt",
    pricePerKg: 11000,
    minOrderKg: 200,
    stockKg: 4000,
    imageUrl: "/images/products/pe-trong.svg",
    isActive: true,
    features: ["Độ trong cao", "Dẻo dai", "Chịu kéo tốt"],
  },
  {
    id: "4",
    name: "Hạt nhựa HDPE xanh lá",
    slug: "hat-nhua-hdpe-xanh-la",
    description:
      "Hạt nhựa HDPE (High-Density Polyethylene) màu xanh lá, cứng và bền. Dùng sản xuất thùng rác, can nhựa, ống thoát nước.",
    plasticType: "HDPE",
    color: "Xanh lá",
    pricePerKg: 9000,
    minOrderKg: 200,
    stockKg: 6000,
    imageUrl: "/images/products/hdpe-xanh-la.svg",
    isActive: true,
    features: ["Cứng cáp", "Chịu va đập", "Giá rẻ nhất"],
  },
  {
    id: "5",
    name: "Hạt nhựa PP đỏ",
    slug: "hat-nhua-pp-do",
    description:
      "Hạt nhựa PP màu đỏ tươi, xay từ rổ nhựa đỏ. Phù hợp sản xuất đồ gia dụng, ghế nhựa, chậu hoa.",
    plasticType: "PP",
    color: "Đỏ",
    pricePerKg: 10500,
    minOrderKg: 100,
    stockKg: 2000,
    imageUrl: "/images/products/pp-do.svg",
    isActive: true,
    features: ["Màu sắc tươi", "Hạt đều", "Dễ nhuộm thêm"],
  },
  {
    id: "6",
    name: "Hạt nhựa PP hỗn hợp",
    slug: "hat-nhua-pp-hon-hop",
    description:
      "Hạt nhựa PP hỗn hợp nhiều màu, giá cực rẻ. Phù hợp sản xuất sản phẩm không yêu cầu màu sắc — pallet, tấm nhựa, gạch block.",
    plasticType: "PP",
    color: "Hỗn hợp",
    pricePerKg: 7500,
    minOrderKg: 500,
    stockKg: 10000,
    imageUrl: "/images/products/pp-hon-hop.svg",
    isActive: true,
    features: ["Giá rẻ nhất", "Số lượng lớn", "Giao nhanh"],
  },
  {
    id: "7",
    name: "Hạt nhựa LDPE trắng đục",
    slug: "hat-nhua-ldpe-trang-duc",
    description:
      "Hạt nhựa LDPE (Low-Density Polyethylene) trắng đục, mềm dẻo. Phù hợp sản xuất túi nhựa, màng co, bao bì mềm.",
    plasticType: "LDPE",
    color: "Trắng đục",
    pricePerKg: 11500,
    minOrderKg: 150,
    stockKg: 2500,
    imageUrl: "/images/products/ldpe-trang-duc.svg",
    isActive: true,
    features: ["Mềm dẻo", "Dễ tạo hình", "Chống ẩm tốt"],
  },
];

/**
 * Lấy sản phẩm theo slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.isActive);
}

/**
 * Lấy sản phẩm theo loại nhựa
 */
export function getProductsByType(plasticType: string): Product[] {
  if (plasticType === "all") return products.filter((p) => p.isActive);
  return products.filter(
    (p) => p.plasticType === plasticType && p.isActive
  );
}

/**
 * Lấy sản phẩm nổi bật (3 sản phẩm đầu)
 */
export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isActive).slice(0, 4);
}
