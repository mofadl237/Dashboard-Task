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
import { Label } from "@/components/ui/label";
interface IProps {
  title: string;
  buttonAdd: string;
  nameCustomer: string;
}
export function PeopleDialog({ title, buttonAdd, nameCustomer }: IProps) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">{buttonAdd}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">{nameCustomer} </Label>
              <Input id="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input id="phone" />
            </div>

            
            <div className="grid gap-3">
              <Label htmlFor="email">الايميل</Label>
              <Input  id="email"/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="order">الطلبات</Label>
              <Input  id="order" type="number"/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="salary">اجمالي المشتريات</Label>
              <Input  id="salary" type="number"/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="salary">اخر عمليه شراء</Label>
              <Input  id="salary" type="number"/>
            </div>
            
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
