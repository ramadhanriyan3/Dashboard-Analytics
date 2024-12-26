"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
}

const SidebarItem = ({ href, label, icon: Icon }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <li
      key={label}
      className={`text-primary hover:bg-primary pl-3 lg:pl-4 py-3 hover:text-white rounded-lg ${
        isActive && "bg-primary text-white"
      }`}
    >
      <Link href={href} className="flex items-center gap-x-2">
        <Icon className={`w-6 h-6 shrink-0 transition-all`} aria-hidden />
        <p
          className={`-translate-x-1 lg:translate-x-0 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 lg:opacity-100 transition-all ease-in-out  w-0 group-hover:w-full lg:w-full h-5 overflow-hidden`}
        >
          {label}
        </p>
      </Link>
    </li>
  );
};

export default SidebarItem;
