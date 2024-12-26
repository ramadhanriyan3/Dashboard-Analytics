"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import qs from "query-string";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { ProductFilter } from "./productFilter";
import { Button } from "./ui/button";

import { categoryList } from "@/lib/dataDummy";

const formSchema = z.object({
  dateStart: z.string({ required_error: "Please Select a date" }).date(),
  dateEnd: z.string({ required_error: "Please Select a date" }).date(),
  products: z
    .array(z.string())
    .refine((values) => values.length > 0, {
      message: "At least one product must be selected",
    })
    .default([]),
});

interface OverviewFilterProps {
  handleCancel: () => void;
}

const OverviewFilter = ({ handleCancel }: OverviewFilterProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      products: [],
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const query = qs.stringifyUrl({
      url: "http://localhost:3000",
      query: {
        start: data.dateStart,
        end: data.dateEnd,
        product: data.products,
      },
    });

    console.log({ data, query });
    handleCancel();
    router.push(`${query}`);
  };

  return (
    <div className="w-full p-2 md:p-5  bg-white rounded-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 items-center justify-center md:justify-between">
            <FormField
              control={form.control}
              name="dateStart"
              render={({ field }) => (
                <FormItem>
                  <div className="h-[80px]">
                    <FormControl>
                      <div className="flex flex-col gap-y-1 text-xs md:text-sm text-muted-foreground">
                        <label htmlFor="dateStart">
                          Chose youre start date
                        </label>
                        <Input
                          type="date"
                          {...field}
                          id="dateStart"
                          className="focus-visible:border-primary"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateEnd"
              render={({ field }) => (
                <FormItem>
                  <div className="h-[80px]">
                    <FormControl>
                      <div className="flex flex-col gap-y-1 text-xs md:text-sm text-muted-foreground">
                        <label htmlFor="dateEnd">Chose youre end date</label>
                        <Input
                          type="date"
                          {...field}
                          id="dateEnd"
                          className="focus-visible:border-primary"
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </div>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="products"
              render={({ field }) => (
                <FormItem>
                  <div className="h-[80px] flex flex-col items-center sm:items-start sm:justify-start justify-center">
                    <FormControl>
                      <ProductFilter
                        {...field}
                        onChange={(values) => form.setValue("products", values)}
                        values={field.value}
                        productList={categoryList}
                      />
                    </FormControl>
                    <FormMessage className="text-[10px]" />
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="flex ml-auto items-center w-fit gap-x-2 px-2 pb-2 md:pb-4">
            <Button
              type="button"
              variant={"outline"}
              onClick={() => handleCancel()}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-primary">
              Search
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OverviewFilter;
