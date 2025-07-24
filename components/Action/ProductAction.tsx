"use client";
import React, { useState } from "react";
import { TableCell } from "../ui/table";
import { Button } from "../ui/button";
import { Loader2, Trash } from "lucide-react";
import { IProduct } from "@/Interface";
import {  deleteInventory, deletePurchases, deleteSales } from "@/action/dashboard";
import { EditProduct } from "../Dialog/EditProduct";

interface IProps {
  product: IProduct;
  name: string;
  title: string;
}

const ProductAction = ({ product, name, title }: IProps) => {
  //1- loading

  const [loading, setLoading] = useState(false);
  //2- Handler

  const onDelete = async (id: string) => {
    if (name === "العميل") {
      setLoading(true);
      await deleteSales(id);
      setLoading(false);
    } else if (name === "المورد") {
      setLoading(true);
      await deleteInventory(id);
      setLoading(false);
    }else{
        setLoading(true);
      await deletePurchases(id);
      setLoading(false);
    }
  };
  return (
    <TableCell className="flex justify-center gap-2">
      <EditProduct title={title} nameCustomer={name} product={product} />
      <Button
        className="cursor-pointer"
        variant="destructive"
        onClick={() => {
          onDelete(product.id!);
        }}
      >
        {loading ? <Loader2 /> : <Trash />}
      </Button>
    </TableCell>
  );
};

export default ProductAction;
