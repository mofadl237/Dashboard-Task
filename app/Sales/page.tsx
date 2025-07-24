import { getSales } from '@/action/dashboard';
import { ProductComponents } from '@/components/ProductComponents'
import React from 'react'

async function page() {
  //1- state 
  const products=await getSales()
  return (
   <ProductComponents 
   customer='العميل' 
   title='المبيعات' 
   products={products}
   buttonAdd='اضافه عميل'
   />
  )
}

export default page