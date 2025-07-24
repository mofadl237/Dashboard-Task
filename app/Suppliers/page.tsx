import CustomerComponent from '@/components/CustomersComponent';
import { ICustomer } from '@/Interface';
import React from 'react'

const page = () => {
  //1- State
  const suppliers: ICustomer[] = [
      {
        id: "1",
        name: "محمد الدسوقي",
        phone: "01087654321",
        email:'m10@gmail.com',
        totalPurchases: 7000,
        ordersCount: 2,
 lastPurchaseDate: new Date("2025-07-19"),
        createdAt:new Date(),      },
      {
        id: "2",
        name: " ابو الهدي",
        phone: "01587654321",
        email:'m1@gmail.com',
        totalPurchases: 5000,
        ordersCount: 1,
 lastPurchaseDate: new Date("2025-07-20"),
        createdAt:new Date(),      },
      {
        id: "3",
        name: "أحمد ياسر",
        phone: "01212345678",
        email:'m3@gmail.com',
        totalPurchases: 15000,
        ordersCount: 3,
 lastPurchaseDate: new Date("2025-5-23"),
        createdAt:new Date(),      },
      {
        id: "4",
        name: "ياسر علي",
        phone: "01198765432",
        email:'m4@gmail.com',
        totalPurchases: 4000,
        ordersCount: 8,
        lastPurchaseDate: new Date("2025-08-22"),
        createdAt:new Date(),
      },
      {
        id: "5",
        name: "محمد الالفي",
        phone: "01198765432",
        email:'m4@gmail.com',
        totalPurchases: 4000,
        ordersCount: 8,
        lastPurchaseDate: new Date("2025-07-22"),
        createdAt:new Date(),
      },
    ];

  return (
   <CustomerComponent
       nameCustomer='المورد'
       title='الموردين' 
       customers={suppliers}
       buttonAdd="اضافه الموردين"
       caption="جدول عرض الموردين الحاليين"
       />
  )
}

export default page
