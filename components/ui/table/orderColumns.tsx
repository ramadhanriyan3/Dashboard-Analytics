"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Link from "next/link";

import { OrderType } from "@/lib/data-dummy/ordersData";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/formater";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const orderColumn: ColumnDef<OrderType>[] = [
  {
    header: "No",
    cell: ({ row }) => {
      const number = row.index + 1;
      return <p className="text-center">{number}</p>;
    },
  },
  {
    accessorKey: "orderId",
    header: "Order Id",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "itemsOrdered",
    header: "Product",
    cell: ({ row }) => {
      const value = row.original.itemsOrdered;
      return <p className="max-w-20 overflow-hidden px-1">{value}</p>;
    },
  },
  {
    accessorKey: "totalAmount",
    header: ({ column }) => {
      return (
        <div className="font-semibold flex gap-x-2 items-center">
          Total Amount
          <div
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="hover:bg-white/10 p-1 rounded-sm  aspect-square cursor-pointer"
          >
            <ArrowUpDown className="h-4 w-4  " />
          </div>
        </div>
      );
    },
    cell: ({ row }) => {
      const value = row.original.totalAmount;
      const amount = formatCurrency(value, "USD");
      return amount;
    },
  },
  {
    accessorKey: "orderDate",
    header: ({ column }) => {
      return (
        <div className="font-semibold flex gap-x-2 items-center">
          Order Date
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
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => {
      const value = row.original.paymentStatus;
      const getColor = (status: string) => {
        let color: string;
        switch (status) {
          case "Paid":
            color = "bg-[#28A745]/80";
            break;
          case "Unpaid":
            color = "bg-[#DC3545]/80";
            break;
          case "Refunded":
            color = "bg-[#FFC107]/80";
            break;
          default:
            color = "bg-[#6C757D]/80";
        }

        return color;
      };
      const color = getColor(value);
      return (
        <p className={`py-[1px] px-1 ${color} rounded-sm text-white w-fit`}>
          {value}
        </p>
      );
    },
  },
  {
    accessorKey: "deliverytatus",
    header: "Delivary Status",
    cell: ({ row }) => {
      const value = row.original.deliveryStatus;
      const getColor = (status: string) => {
        let color: string;
        switch (status) {
          case "Shipped":
            color = "bg-[#007BFF]/80";
            break;
          case "In Transit":
            color = "bg-[#FFC107]/80";
            break;
          case "Delivered":
            color = "bg-[#28A745]/80";
            break;
          case "Returned":
            color = "bg-[#DC3545]/80";
            break;
          default:
            color = "bg-[#6C757D]/80";
        }

        return color;
      };
      const color = getColor(value);
      return (
        <p className={`py-[1px] px-1 ${color} rounded-sm text-white w-fit`}>
          {value}
        </p>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const value = row.original.status;
      const getColor = (status: string) => {
        let color: string;
        switch (status) {
          case "Pending":
            color = "bg-[#FFC107]/80";
            break;
          case "Processing":
            color = "bg-[#007BFF]/80";
            break;
          case "Completed":
            color = "bg-[#28A745]/80";
            break;
          case "Cancelled":
            color = "bg-[#DC3545]/80";
            break;
          default:
            color = "bg-[#6C757D]/80";
        }

        return color;
      };
      const color = getColor(value);
      return (
        <p className={`py-[1px] px-1 ${color} rounded-sm text-white w-fit`}>
          {value}
        </p>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;

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
              onClick={() => navigator.clipboard.writeText(order.orderId)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <Link href={`/orders/${order.orderId}`}>
              <DropdownMenuItem>View order</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
