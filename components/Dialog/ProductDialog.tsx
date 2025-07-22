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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface IProps {
  title: string;
  buttonAdd: string;
  nameCustomer: string;
}
export function ProductDialog({ title, buttonAdd, nameCustomer }: IProps) {
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
              <Label htmlFor="name-1">اسم المنتج</Label>
              <Input name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">الكميه</Label>
              <Input name="quantity" type="number" />
            </div>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="خضار">خضار</SelectItem>
                <SelectItem value="فاكهه">فاكهه</SelectItem>
              </SelectContent>
            </Select>
            <div className="grid gap-3">
              <Label htmlFor="username-1">السعر</Label>
              <Input name="price" type="number" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">{nameCustomer}</Label>
              <Input />
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
