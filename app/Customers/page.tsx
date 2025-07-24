import { getCustomers } from "@/action/dashboard";
import PeopleComponent from "@/components/PeopleComponent"

const page = async () => {
const Customers = await getCustomers();
  return (
    <PeopleComponent
    nameCustomer='العميل'
    title='العملاء' 
    customers={Customers}
    buttonAdd="اضافه العملاء"
    caption="جدول عرض العملاء الحاليين"
    />
  )
}

export default page
