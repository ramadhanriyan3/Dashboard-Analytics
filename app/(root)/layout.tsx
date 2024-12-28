import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

import { ReactNode, Suspense } from "react";

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full relative">
      <Sidebar />
      <Navbar />
      <Suspense>
        <div className="ml-[90px] lg:ml-[280px] mr-4 pt-20 ">{children}</div>
      </Suspense>
    </div>
  );
};

export default PrivateLayout;
