"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { Form } from "../ui/form";
import { Button } from "../ui/button";
import CustomFormField from "../customFormField";
import { FormFieldType } from "@/lib/allType.types";
import { products } from "@/lib/data-dummy/productsData";

const today = new Date();
const formSchema = z
  .object({
    dateStart: z.string({ required_error: "Please Select a date" }).date(),
    dateEnd: z
      .string({ required_error: "Please Select a date" })
      .date()
      .refine(
        (date: string) => {
          const selectedDate = new Date(date);
          return selectedDate <= today;
        },
        {
          message: "Date cannot be in the future",
        }
      ),
    product: z.string().array(),
  })
  .refine(
    (data) => {
      const startDate = new Date(data.dateStart);
      const endDate = new Date(data.dateEnd);
      return startDate <= endDate;
    },
    { message: "Start date cannot be later than end date", path: ["dateStart"] }
  );

interface OverviewFilterProps {
  handleCancel: () => void;
}

const OverviewFilter = ({ handleCancel }: OverviewFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = qs.parse(searchParams.toString(), {
    types: {
      product: "string[]",
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateStart: searchQuery.start as string,
      dateEnd: searchQuery.end as string,
      product: [],
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    const origin = window.origin;
    const query = qs.stringifyUrl(
      {
        url: origin,
        query: {
          start: data.dateStart,
          end: data.dateEnd,
        },
      },
      {
        sort: false,
      }
    );

    handleCancel();
    router.push(`${query}`);
  };

  return (
    <div className="w-fit p-2 md:p-5  bg-white rounded-md">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-2"
        >
          <div className="flex flex-col sm:flex-row gap-x-2 gap-y-2 items-center justify-center md:justify-between">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dateStart"
              label="Expected start date"
              dateFormat="dd/MM/yyyy"
            />
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="dateEnd"
              label="Expected end date"
              dateFormat="dd/MM/yyyy"
            />
            <CustomFormField
              fieldType={FormFieldType.COMBOBOX}
              control={form.control}
              name="product"
              label="Product"
              optionList={products}
              setValue={form.setValue}
            />
          </div>
          <div className="flex ml-auto items-center w-fit gap-x-2 pb-2 md:pb-4">
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
