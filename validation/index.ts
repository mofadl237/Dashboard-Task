import { z } from "zod";

export const peopleSchema = z.object({
  name: z.string().min(1, "الاسم مطلوب"),
  phone: z.string().min(10, "رقم الهاتف مطلوب"),
  email: z.string().email("البريد الإلكتروني غير صالح"),
  ordersCount: z.number(),
  totalPurchases: z.number(),
  lastPurchaseDate: z.date(),
});

export const productSchema = z.object({
  supplierName: z.string().min(1),
  name: z.string().min(1),
  category: z.string().min(1),
  price: z.number().min(0),
  quantity: z.number().min(0),
});
