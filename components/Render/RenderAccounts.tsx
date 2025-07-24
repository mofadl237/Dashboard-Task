"use client";

import { IExpense, IRevenue } from "@/Interface";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

type Props = {
  
  revenues: IRevenue[];
  expenses: IExpense[];
};

export default function RenderAccounts({  revenues, expenses }: Props) {
  //1- state
  const allExpenses = expenses.reduce((sum,curr) => sum + curr.amount ,0)
  const allRevenue = revenues.reduce((sum:number, curr:IRevenue) => sum + curr.amount,0);
  const cash =allExpenses + allRevenue;
  //2-handler
  return (
    <div className="w-full">
      <Card className="w-full ">
      <CardHeader>
        <CardTitle className="text-2xl text-center">ملخص الحسابات</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">
            EGP  المصاريف: <span className="text-green-600">{cash} </span>
          </h3>
        </div>

        <Tabs defaultValue="revenues" className="w-full mt-4">
          <TabsList>
            <TabsTrigger value="revenues">الإيرادات</TabsTrigger>
            <TabsTrigger value="expenses">المصروفات</TabsTrigger>
          </TabsList>

          <TabsContent value="revenues">
            <Table>
                <TableCaption>الايرادات : {allRevenue} </TableCaption>
              <TableHeader>

                <TableRow>
                  <TableHead>المصدر</TableHead>
                  <TableHead>القيمة</TableHead>
                  <TableHead>التاريخ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {revenues.map((rev, i) => (
                  <TableRow key={i}>
                    <TableCell>{rev.source}</TableCell>
                    <TableCell>{rev.amount} EGP</TableCell>
                    <TableCell>{rev.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="expenses">
            <Table>
                <TableCaption>المصروفات : {allExpenses} </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>التصنيف</TableHead>
                  <TableHead>الوصف</TableHead>
                  <TableHead>القيمة</TableHead>
                  <TableHead>التاريخ</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenses.map((exp, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Badge variant="outline" className="capitalize">
                        {exp.category}
                      </Badge>
                    </TableCell>
                    <TableCell>{exp.description}</TableCell>
                    <TableCell>{exp.amount} EGP</TableCell>
                    <TableCell>{exp.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
    </div>
  );
}
