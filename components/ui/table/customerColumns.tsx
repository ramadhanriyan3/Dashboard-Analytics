"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { CustomerType } from "@/lib/data-dummy/customerData";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const customerColumn: ColumnDef<CustomerType>[] = [
  {
    header: "No",
    cell: ({ row }) => {
      const number = row.index + 1;
      return <p className="text-center">{number}</p>;
    },
  },

  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className="font-semibold flex gap-x-2 items-center">
          Email
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-white/10 p-1 rounded-sm  aspect-square cursor-pointer"
          >
            <ArrowUpDown className="h-4 w-4  " />
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "birthday",
    header: ({ column }) => {
      return (
        <div className="font-semibold flex gap-x-2 items-center">
          Age
          <div
            className="hover:bg-white/10 p-1 rounded-sm  aspect-square cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            <ArrowUpDown className="h-4 w-4  " />
          </div>
        </div>
      );
    },
    cell: (row) => {
      const value = row.getValue() as string;
      const now = new Date().getFullYear();
      const birthdayYear = new Date(value).getFullYear();
      return <p className="text-center">{now - birthdayYear}</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(customer.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <Link href={`/customers/${customer.id}`}>
              <DropdownMenuItem>View customer</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
