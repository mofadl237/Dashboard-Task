import { InventoryComponents } from "@/components/InventoryComponents";
import { IProduct } from "@/Interface";
import React from "react";

function page() {
  //1- state
  const products: IProduct[] = [
    {
      id: 1,
      category: "خضار",
      name: "فلفل الوان",
      price: 12500,
      quantity: 5,
      supplierName: "محمد اسامه",
    },
    {
      id: 1,
      category: "خضار",
      name: "فلفل الوان",
      price: 12500,
      quantity: 5,
      supplierName: "محمد اسامه",
    },
    {
      id: 1,
      category: "فاكهه",
      name: "تفاح",
      price: 5000,
      quantity: 2,
      supplierName: "محمد علي",
    },
    {
      id: 1,
      category: "خضار",
      name: "طماطم",
      price: 10000,
      quantity: 5,
      supplierName: "ياسر غاليه",
    },
  ];
  return (
    <InventoryComponents 
    customer="المورد" 
    title="المخزن"
     products={products} 
     buttonAdd='اضافه مورد'
     />
  );
}

export default page;
