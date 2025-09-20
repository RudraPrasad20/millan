import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Details = {
  id: string;
  name: string;
  email: string;
  wallet: string;
  amount: string;
  // details: string | null;
  // date: Date;
};

export const columns: ColumnDef<Details>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "NAME" },
  { accessorKey: "email", header: "EMAIL" },
  { accessorKey: "wallet", header: "WALLET ADDRESS" },
  { accessorKey: "amount", header: "AMOUNT", cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      return amount + " " + "SOL"
  }},
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const entity = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigator.clipboard.writeText(entity.id)}>Copy ID</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigator.clipboard.writeText(entity.email)}>Copy Email</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => navigator.clipboard.writeText(entity.wallet)}>Copy Wallet Address</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">Pay via SOL</DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">Generate Invoice</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
