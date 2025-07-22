import { InventoryComponents } from '@/components/InventoryComponents'
import { IProduct } from '@/Interface';
import React from 'react'

function page() {
  //1- state 
  const products: IProduct[] = [
    {
      id: 1,
      category: "فاكهه",
      name: "فراوله",
      price: 3200,
      quantity: 2,
      supplierName: "غاليه جمال",
    },
    {
      id: 3,
      category: "خضار",
      name: "طماطم ",
      price: 400,
      quantity: 2,
      supplierName: "علي خالد",
    },
    {
      id: 2,
      category: "فاكهه",
      name: "تفاح",
      price: 200,
      quantity: 2,
      supplierName: "جمال علي",
    },
    {
      id: 1,
      category: "خضار",
      name: "خيار",
      price: 500,
      quantity: 5,
      supplierName: "محمود محمد",
    },
  ];
  return (
   <InventoryComponents 
   customer='العميل' 
   title='المبيعات' 
   products={products}
   buttonAdd='اضافه عميل'
   />
  )
}

export default page