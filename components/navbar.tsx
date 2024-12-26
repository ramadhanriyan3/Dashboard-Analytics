import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="absolute w-full h-16 drop-shadow-md bg-white flex justify-between items-center px-5">
      <Image src={"/logo.svg"} height={40} width={50} alt="logo" priority />
      <div className="flex gap-x-4 items-center justify-end">
        <Image
          className="rounded-full border-2"
          src={"/logo.svg"}
          height={40}
          width={40}
          alt="logo"
          priority
        />
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-md transition-all">
          logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
