import { getPurchases } from "@/action/dashboard";
import { ProductComponents } from "@/components/ProductComponents";
import React from "react";

async function page() {
  //1- state
  const products = await getPurchases()
  return (
    <ProductComponents 
    customer="البائع" 
    title="المشتريات"
     products={products} 
     buttonAdd='شراء منتج'
     />
  );
}

export default page;
