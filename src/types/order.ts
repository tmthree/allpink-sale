export type OrderFormData = {
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  productName: string;
  quantityKg: number;
  notes: string;
};

export type ContactFormData = {
  name: string;
  phone: string;
  message: string;
  productInterest?: string;
};
