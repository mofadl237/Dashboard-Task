'use client'
import React, { useState } from 'react'
import { TableCell } from '../ui/table'
import { Button } from '../ui/button'
import {  Loader2, Trash } from 'lucide-react'
import { ICustomer } from '@/Interface';
import { deleteCustomers, deleteSuppliers } from '@/action/dashboard';
import { EditPeople } from '../Dialog/EditPeople'

interface IProps{
    customer:ICustomer;
    name:string;
    title:string;
}

const CustomerAction = ({customer,name,title}:IProps) => {
    //1- loading
     
    const [loading,setLoading]=useState(false)
    //2- Handler
    
    const onDelete = async(id:string)=>{
        if(name === 'العميل'){
            setLoading(true)
            await deleteCustomers(id)
            setLoading(false)
        }else{
            setLoading(true)
            await deleteSuppliers(id)
            setLoading(false)
        }
    }
  return (
    <TableCell className="flex justify-between gap-2">
                <EditPeople title={title} nameCustomer={name} people={customer} />
                <Button  className="w-1/2 cursor-pointer" variant="destructive"  onClick={()=>{onDelete(customer.id!); }}>
                  {loading ? <Loader2/> :<Trash/>}
                </Button>
              </TableCell>
  )
}

export default CustomerAction
