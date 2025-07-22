export interface IRevenue  {
  source: string;
  amount: number;
  date: string;
};

export interface IExpense  {
  category: "products" | "rent" | "workers";
  description: string;
  amount: number;
  date: string;
};

export interface ICustomer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  totalPurchases: number;
  ordersCount: number;     
  lastPurchaseDate?: string; 
  createdAt?: string;
}
export interface IProduct{
    id:number;
    name:string;
    quantity:number;
    category:string;
    price:number;
    supplierName:string;
}
