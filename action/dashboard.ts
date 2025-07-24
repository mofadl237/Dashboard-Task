'use server'
import { ICustomer } from '@/Interface';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
const prisma = new PrismaClient();

export const getCustomers = async()=>{
   const Customers = await prisma.customers.findMany();
   return Customers
}
export const addCustomers = async(body:ICustomer)=>{
   await prisma.customers.create({
        data:body
    });
    revalidatePath('/')
}
export const deleteCustomers = async(id:string)=>{
   await prisma.customers.delete({
        where:{
            id,
        }
    });
    revalidatePath('/')
}
export const updateCustomers = async(id:string,data:ICustomer)=>{
    await prisma.customers.update({
        where:{
            id,
        },
        data,
    });
    revalidatePath('/')
}
