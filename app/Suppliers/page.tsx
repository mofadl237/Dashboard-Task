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
        lastPurchaseDate: "2025-07-19",
      },
      {
        id: "2",
        name: " ابو الهدي",
        phone: "01587654321",
        email:'m1@gmail.com',
        totalPurchases: 5000,
        ordersCount: 1,
        lastPurchaseDate: "2025-07-20",
      },
      {
        id: "3",
        name: "أحمد ياسر",
        phone: "01212345678",
        email:'m3@gmail.com',
        totalPurchases: 15000,
        ordersCount: 3,
        lastPurchaseDate: "2025-07-21",
      },
      {
        id: "4",
        name: "ياسر علي",
        phone: "01198765432",
        email:'m4@gmail.com',
        totalPurchases: 4000,
        ordersCount: 8,
        lastPurchaseDate: "2025-07-22",
      },
      {
        id: "5",
        name: "محمد الالفي",
        phone: "01198765432",
        email:'m4@gmail.com',
        totalPurchases: 4000,
        ordersCount: 8,
        lastPurchaseDate: "2025-07-22",
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
