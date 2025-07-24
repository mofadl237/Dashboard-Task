"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICustomer } from "@/Interface";
import { PeopleDialog } from './Dialog/PeopleDialog';
import CustomerAction from "./Action/CustomerAction";




interface IProps {
    customers: ICustomer[];
    title:string;
    caption:string;
    nameCustomer:string;
    buttonAdd:string;
}
export default function CustomerComponent({nameCustomer,customers,title,buttonAdd,caption}:IProps) {
  return (
    <div className="p-4 rounded-xl shadow-md bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <PeopleDialog buttonAdd={buttonAdd} nameCustomer={nameCustomer} title={title}/>
      </div>

      <Table>
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>الاسم</TableHead>
            <TableHead>رقم الهاتف</TableHead>
            <TableHead>الايميل</TableHead>
            <TableHead>عدد الطلبات</TableHead>
            <TableHead>اجمالي المشتريات</TableHead>
            <TableHead>آخر عملية شراء</TableHead>
          <TableHead className="text-center">الاجراءات</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.ordersCount}</TableCell>
              <TableCell>{customer.totalPurchases} ج.م</TableCell>
              <TableCell>{customer.lastPurchaseDate.toLocaleDateString()}</TableCell>
              <CustomerAction title={title} customer={customer} name={nameCustomer}/>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>الإجمالي</TableCell>
            <TableCell>
              {customers.reduce((sum, c) => sum + c.totalPurchases, 0)} ج.م
            </TableCell>
            <TableCell colSpan={2}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
