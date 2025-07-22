import React from "react";

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableCaption,
  TableHeader,
} from "@/components/ui/table";
import { IProduct } from "@/Interface";
import { Button } from "./ui/button";
// import { Button } from "./ui/button";
// import { Edit2, Trash } from "lucide-react";
interface IProps{
    products:IProduct[];
    title:string;
    customer:string;
    buttonAdd:string;
}
export const InventoryComponents = ({products,title,customer,buttonAdd}:IProps) => {
  
  return (
    
    <div className="space-y-4 bg-white shadow-xl p-3">
        <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <Button>{buttonAdd}</Button>
      </div>
        <Table  className=" mt-5">
        <TableCaption>{title}</TableCaption>
      <TableHeader >
        <TableRow>
          <TableHead>اسم المنتج</TableHead>
          <TableHead>الكمية</TableHead>
          <TableHead>الصنف</TableHead>
          <TableHead>السعر</TableHead>
          <TableHead>{customer}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.name}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.category}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.supplierName}</TableCell>

            {/* <TableCell className="flex justify-between gap-2">
                <Button  className="w-1/2" variant="outline">
                  <Edit2/>
                </Button>
                <Button  className="w-1/2" variant="destructive">
                  <Trash/>
                </Button>
              </TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>

   
  );
};
