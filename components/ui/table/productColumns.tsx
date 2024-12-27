"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Pencil, Trash2, ArrowUpDown } from "lucide-react";
import Link from "next/link";

import { ProductType } from "@/lib/dataDummy";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const productColumns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "imageUrl",
    header: "",
    cell: ({ row }) => {
      return (
        <div className="w-full flex items-center justify-center">
          <Image
            alt="productImage"
            src={row.getValue("imageUrl")}
            width={35}
            height={35}
            className="aspect-square rounded-full drop-shadow-sm"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "createdAt",
    header: "Ceated At",
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <div className="font-semibold flex gap-x-2 items-center">
          Last Update
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
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <div className="font-semibold flex gap-x-2 items-center">
          Quantity
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
      return <p className="text-center">{value}</p>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <div className="flex items-center gap-x-4">
          <Link href={`/products/${product.id}`}>
            <Pencil className="w-4 aspect-square cursor-pointer" />
          </Link>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Trash2 className="text-danger w-4 aspect-square cursor-pointer" />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  {`This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.`}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() =>
                    alert(`your ${product.id} Product has been deleted`)
                  }
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
