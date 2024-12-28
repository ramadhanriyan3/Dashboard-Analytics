"use client";

import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { productList } from "@/lib/data-dummy/productsData";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const formSchema = z.object({
  name: z.string({ required_error: "This field can not be empty" }),
  price: z.number().nonnegative({ message: "Price must be a positive number" }),
  quantity: z
    .number()
    .nonnegative({ message: "Price must be a positive number" }),
});

const ProductIdPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const toast = useToast();

  const product = productList.filter((item) => {
    return item.id === params.id;
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product[0]?.name,
      price: product[0]?.price,
      quantity: product[0]?.quantity,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    toast.toast({
      title: "Your data has been updated",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
    console.log(data);
    router.push("/products");
  };

  return (
    <div className="w-full drop-shadow-sm rounded-md p-x-2 md:px-4 gap-x-5 flex flex-col sm:flex-row">
      <div className="relative sm:self-center bg-white rounded-sm p-4">
        <Image
          src={product[0] ? product[0].imageUrl : "/notFound.jpg"}
          width={400}
          height={400}
          alt="product-image"
          priority
        />
      </div>
      <div className=" bg-white rounded-sm p-4 w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-sm font-semibold" htmlFor="name">
                        Product name
                      </label>
                      <Input
                        {...field}
                        id="name"
                        className="focus-visible:border-primary"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-2">
                      <label className="text-sm font-semibold" htmlFor="price">
                        Price
                      </label>
                      <Input
                        {...field}
                        id="price"
                        type="number"
                        className="focus-visible:border-primary"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col gap-y-2">
                      <label
                        className="text-sm font-semibold"
                        htmlFor="quantity"
                      >
                        Quantity
                      </label>
                      <Input
                        {...field}
                        id="quantity"
                        type="number"
                        className="focus-visible:border-primary"
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <div className={`flex gap-x-2 items-center self-end`}>
              <Link href={"/products"}>
                <Button variant={"outline"}>Cancer</Button>
              </Link>
              <Button type="submit">Continue</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ProductIdPage;
