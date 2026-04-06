// Business information — thay bằng thông tin thật của cơ sở
export const SITE_CONFIG = {
  name: "AllPink Nhựa Tái Chế",
  shortName: "AllPink",
  description:
    "Chuyên cung cấp hạt nhựa tái chế PP, PE, HDPE chất lượng cao. Thu mua, xay, đóng bao — giao hàng toàn quốc.",
  url: "https://www.nhuaallpink.io.vn",
} as const;

// Thông tin liên hệ
export const CONTACT_INFO = {
  phone: "0908244202",
  zalo: "0908244202",
  email: "",
  address: "23 Đ. Tân Xuân, Xã Bà Điểm, Hồ Chí Minh, Việt Nam",
  workingHours: "Thứ 2 - Thứ 7: 7:00 - 17:00",
} as const;

// Thông tin ngân hàng — bổ sung sau khi có
// Set giá trị { bankName, accountNumber, accountHolder } khi muốn hiện trên web
export const BANK_INFO: {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
} | null = null;

// Zalo link
export const ZALO_LINK = `https://zalo.me/${CONTACT_INFO.zalo}`;

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
] as const;

// Google Sheets webhook URL — THAY BẰNG URL THẬT
// Hướng dẫn tạo: Google Sheets → Extensions → Apps Script → deploy web app
export const GOOGLE_SHEETS_WEBHOOK_URL = "";

// Loại nhựa
export const PLASTIC_TYPES = [
  { value: "PP", label: "Nhựa PP (Polypropylene)" },
  { value: "PE", label: "Nhựa PE (Polyethylene)" },
  { value: "HDPE", label: "Nhựa HDPE (High-Density PE)" },
  { value: "LDPE", label: "Nhựa LDPE (Low-Density PE)" },
] as const;

// Order statuses
export const ORDER_STATUSES = [
  { value: "moi", label: "Mới", color: "bg-blue-100 text-blue-800" },
  { value: "xac-nhan", label: "Đã xác nhận", color: "bg-yellow-100 text-yellow-800" },
  { value: "dang-giao", label: "Đang giao", color: "bg-purple-100 text-purple-800" },
  { value: "hoan-thanh", label: "Hoàn thành", color: "bg-green-100 text-green-800" },
  { value: "huy", label: "Đã hủy", color: "bg-red-100 text-red-800" },
] as const;
