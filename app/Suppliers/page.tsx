import { getSuppliers } from '@/action/dashboard';
import PeopleComponent from '@/components/PeopleComponent';
import React from 'react'

const page = async () => {
  //1- State
 const suppliers =await getSuppliers()
  return (
   <PeopleComponent
       nameCustomer='المورد'
       title='الموردين' 
       customers={suppliers}
       buttonAdd="اضافه الموردين"
       caption="جدول عرض الموردين الحاليين"
       />
  )
}

export default page
