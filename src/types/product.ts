export type PlasticType = "PP" | "PE" | "HDPE" | "LDPE";

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  plasticType: PlasticType;
  color: string;
  pricePerKg: number;
  minOrderKg: number;
  stockKg: number;
  imageUrl: string;
  isActive: boolean;
  features: string[];
};
