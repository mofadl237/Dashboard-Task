import { getCustomers } from "@/action/dashboard";
import CustomerComponent from "@/components/CustomersComponent"

const page = async () => {
const Customers = await getCustomers();
  return (
    <CustomerComponent
    nameCustomer='العميل'
    title='العملاء' 
    customers={Customers}
    buttonAdd="اضافه العملاء"
    caption="جدول عرض العملاء الحاليين"
    />
  )
}

export default page
