"use client";
import { addCustomers, addSuppliers } from "@/action/dashboard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { peopleSchema } from "@/validation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Loader } from "lucide-react";

interface IProps {
  title: string;
  buttonAdd: string;
  nameCustomer: string;
}
export function PeopleDialog({ title, buttonAdd, nameCustomer }: IProps) {
  //1- state
  const [loading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  //2- handler
  const form = useForm<z.infer<typeof peopleSchema>>({
    resolver: zodResolver(peopleSchema),
    defaultValues: {
      email: "",
      name: "",
      lastPurchaseDate: new Date(),
      ordersCount: 0,
      phone: "",
      totalPurchases: 0,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof peopleSchema>) {
    
    setIsLoading(true);
    if (nameCustomer === "العميل") {
      await addCustomers(values);
    } else {
      await addSuppliers(values);
    }
    setIsLoading(false);
    setOpenDialog(false);
    form.reset();
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <Button variant="outline">{buttonAdd}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{nameCustomer}</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      {`ادخل الاسم الخاص ب${nameCustomer}`}{" "}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>رقم الهاتف</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الايميل</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ordersCount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الطلبات</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="totalPurchases"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اجمالي المشتريات</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastPurchaseDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>اخر عمليه شراء</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        // {...field}
                          onChange={e => field.onChange(new Date(e.target.value))}

                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">
                {loading ? <Loader /> : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
