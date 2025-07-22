import { InventoryComponents } from "@/components/InventoryComponents";
import { IProduct } from "@/Interface";
import React from "react";

function page() {
  //1- state
  const products: IProduct[] = [
    {
      id: 1,
      category: "خضار",
      name: "طمامطم ",
      price: 5700,
      quantity: 2,
      supplierName: "محمد فضل",
    },
    {
      id: 1,
      category: "خضار",
      name: "فلفل الوان",
      price: 50000,
      quantity: 3,
      supplierName: "محمد الالفي",
    },
    
  ];
  return (
    <InventoryComponents 
    customer="البائع" 
    title="المشتريات"
     products={products} 
     buttonAdd='شراء منتج'
     />
  );
}

export default page;
