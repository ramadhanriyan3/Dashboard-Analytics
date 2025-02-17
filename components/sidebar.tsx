"use client";

import { sidebarItems } from "@/lib/constant";
import SidebarItem from "./sidebarItem";

const Sidebar = () => {
  return (
    <div
      className={`absolute  mt-20 mb-5 ml-2 xl:ml-4 rounded-lg  z-[10] w-[60px] xl:w-[250px] group hover:w-[250px] transition-all ease-in-out  bg-white drop-shadow-md shado  border border-black/10 h-fit   `}
    >
      <ul className="flex flex-col mx-auto">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
