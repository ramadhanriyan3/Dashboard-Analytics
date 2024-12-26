import {
  Home,
  ShoppingCart,
  Package,
  Users,
  BarChart2,
  Tag,
  Settings,
  User,
  ClipboardList,
  Activity,
} from "lucide-react";

export const sidebarItems = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/",
  },
  {
    label: "Products",
    icon: Package,
    href: "/products",
  },
  {
    label: "Orders",
    icon: ShoppingCart,
    href: "/orders",
  },
  {
    label: "Customers",
    icon: Users,
    href: "/customers",
  },
  {
    label: "Analytics & Reports",
    icon: BarChart2,
    href: "/reports",
  },
  {
    label: "Discounts & Promotions",
    icon: Tag,
    href: "/promotions",
  },
  {
    label: "Inventory Management",
    icon: ClipboardList,
    href: "/inventory",
  },
  {
    label: "Store Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    label: "Users & Permissions",
    icon: Users,
    href: "/permission",
  },
  {
    label: "Account",
    icon: User,
    href: "/account",
  },
  {
    label: "Help",
    icon: Activity,
    href: "/help",
  },
];

function formatShortCurrency(amount: number): string {
  if (amount >= 1_000_000_000) {
    return (amount / 1_000_000_000).toFixed(1) + "B";
  } else if (amount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(1) + "M";
  } else if (amount >= 1_000) {
    return (amount / 1_000).toFixed(1) + "K";
  }
  return amount.toString();
}

export const getCurrency = (amount: number) => {
  const formattedShort = formatShortCurrency(amount);

  const result = "$" + formattedShort;

  return result;
};
