'use server'
import { ICustomer } from '@/Interface';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getCustomers = async()=>{
   const Customers = await prisma.customers.findMany();
   return Customers
}
export const addCustomers = async(body:ICustomer)=>{
    prisma.customers.create({
        data:body
    })
}
export const deleteCustomers = async()=>{
    prisma.customers.findMany()
}
export const updateCustomers = async()=>{
    prisma.customers.findMany()
}
