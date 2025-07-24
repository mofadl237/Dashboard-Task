import { getInventory } from "@/action/dashboard";
import { ProductComponents } from "@/components/ProductComponents";
import React from "react";

async function page() {
  //1- state
  const products = await getInventory();
  return (
    <ProductComponents 
    customer="المورد" 
    title="المخزن"
     products={products} 
     buttonAdd='اضافه مورد'
     />
  );
}

export default page;
