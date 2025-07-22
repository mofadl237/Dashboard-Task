import CustomerComponent from "@/components/CustomersComponent"
import { ICustomer } from "@/Interface";

const page = () => {

  const customers: ICustomer[] = [
    {
      id: "1",
      name: "محمد فضل",
      phone: "01012345678",
      email:'m1@gmail.com',
      totalPurchases: 1500,
      ordersCount: 5,
      lastPurchaseDate: "2025-07-19",
    },
    {
      id: "1",
      name: "أحمد ابو الهدي",
      phone: "01512345678",
      email:'m2@gmail.com',
      totalPurchases: 1500,
      ordersCount: 5,
      lastPurchaseDate: "2025-07-20",
    },
    {
      id: "1",
      name: "أحمد فضل",
      phone: "01212345678",
      email:'m5@gmail.com',
      totalPurchases: 1500,
      ordersCount: 5,
      lastPurchaseDate: "2025-07-21",
    },
    {
      id: "2",
      name: "الدسوقي علي",
      phone: "01198765432",
      email:'m15@gmail.com',
      totalPurchases: 2300,
      ordersCount: 8,
      lastPurchaseDate: "2025-07-22",
    },
  ];

  return (
    <CustomerComponent
    title='العملاء' 
    customers={customers}
    buttonAdd="اضافه العملاء"
    caption="جدول عرض العملاء الحاليين"
    />
  )
}

export default page
