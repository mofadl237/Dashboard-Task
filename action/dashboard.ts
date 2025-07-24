'use server'
import { ICustomer, IProduct } from '@/Interface';
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

// Suppliers
export const getSuppliers = async()=>{
   const Suppliers = await prisma.suppliers.findMany();
   return Suppliers
}
export const addSuppliers = async(body:ICustomer)=>{
   await prisma.suppliers.create({
        data:body
    });
    revalidatePath('/Suppliers')
}
export const deleteSuppliers = async(id:string)=>{
   await prisma.suppliers.delete({
        where:{
            id,
        }
    });
        revalidatePath('/Suppliers')

}
export const updateSuppliers = async(id:string,data:ICustomer)=>{
    await prisma.suppliers.update({
        where:{
            id,
        },
        data,
    });
    revalidatePath('/Suppliers')
}


// Inventory
export const getInventory = async()=>{
   const Inventory = await prisma.inventory.findMany();
   return Inventory
}
export const addInventory = async(body:IProduct)=>{
   await prisma.inventory.create({
        data:body
    });
    revalidatePath('/Inventory')
}
export const deleteInventory = async(id:string)=>{
   await prisma.inventory.delete({
        where:{
            id,
        }
    });
        revalidatePath('/Inventory')

}
export const updateInventory = async(id:string,data:IProduct)=>{
    await prisma.inventory.update({
        where:{
            id,
        },
        data,
    });
    revalidatePath('/Inventory')
}


// Purchases
export const getPurchases = async()=>{
   const Purchases = await prisma.purchases.findMany();
   return Purchases
}
export const addPurchases = async(body:IProduct)=>{
   await prisma.purchases.create({
        data:body
    });
    revalidatePath('/Purchases')
}
export const deletePurchases = async(id:string)=>{
   await prisma.purchases.delete({
        where:{
            id,
        }
    });
        revalidatePath('/Purchases')

}
export const updatePurchases = async(id:string,data:IProduct)=>{
    await prisma.purchases.update({
        where:{
            id,
        },
        data,
    });
    revalidatePath('/Purchases')
}

// Sales
export const getSales = async()=>{
   const Sales = await prisma.sales.findMany();
   return Sales
}
export const addSales = async(body:IProduct)=>{
   await prisma.sales.create({
        data:body
    });
    revalidatePath('/Sales')
}
export const deleteSales = async(id:string)=>{
   await prisma.sales.delete({
        where:{
            id,
        }
    });
        revalidatePath('/Sales')

}
export const updateSales = async(id:string,data:IProduct)=>{
    await prisma.sales.update({
        where:{
            id,
        },
        data,
    });
    revalidatePath('/Sales')
}
