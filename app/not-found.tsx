import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full h-full min-h-screen bg-white flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-y-5">
        <Image
          width={500}
          height={500}
          priority
          alt="notFound"
          src={"/error-404.png"}
        />
        <h2 className="text-center font-bold text-xl">PAGE NOT FOUND</h2>
        <Link
          href={"/"}
          className="px-4 py-2 bg-primary/90 rounded-full hover:bg-primary/70 text-white"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
