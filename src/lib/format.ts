/**
 * Format số tiền VND — e.g., 50000 → "50.000₫"
 */
export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

/**
 * Format số tiền VND ngắn gọn — e.g., 50000 → "50.000"
 */
export function formatNumber(amount: number): string {
  return new Intl.NumberFormat("vi-VN").format(amount);
}

/**
 * Format ngày DD/MM/YYYY — e.g., "06/04/2026"
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

/**
 * Format số điện thoại — e.g., "0901234567" → "0901.234.567"
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)}.${cleaned.slice(4, 7)}.${cleaned.slice(7)}`;
  }
  return phone;
}
