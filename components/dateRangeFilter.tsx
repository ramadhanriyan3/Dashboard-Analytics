"use client";

import qs from "query-string";
import { useRouter } from "next/navigation";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { getDateRanges } from "@/lib/dateHerper";
import { useEffect, useState } from "react";

const DateRangeFilter = () => {
  const router = useRouter();

  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    const myUrl = new URL(window.location.href);
    setUrl(myUrl.origin);
  }, []);

  const { lastWeek, lastMonth, lastYear } = getDateRanges();

  const handleChange = (value: string) => {
    const query = (values: { start: string; end: string }) =>
      qs.stringifyUrl(
        {
          url: url,
          query: {
            start: values.start,
            end: values.end,
          },
        },
        {
          sort: false,
        }
      );

    if (value === "last-year") {
      router.push(query(lastYear));
      return;
    }
    if (value === "last-month") {
      router.push(query(lastMonth));
      return;
    }
    router.push(query(lastWeek));
  };

  return (
    <div className="w-full px-2 py-1 flex flex-col gap-y-1">
      <p className="text-xs md:text-sm text-muted-foreground"></p>

      <RadioGroup
        className="flex items-center gap-x-4"
        onValueChange={handleChange}
      >
        <div className="flex gap-x-1 items-center">
          <RadioGroupItem value="last-year" id="year" />
          <label
            className="text-[10px] md:text-sm text-muted-foreground"
            htmlFor="year"
          >
            Last Year
          </label>
        </div>
        <div className="flex gap-x-1 items-center">
          <RadioGroupItem value="last-month" id="month" />
          <label
            className="text-[10px] md:text-sm text-muted-foreground"
            htmlFor="month"
          >
            Last month
          </label>
        </div>
        <div className="flex gap-x-1 items-center">
          <RadioGroupItem value="last-week" id="week" />
          <label
            className="text-[10px] md:text-sm text-muted-foreground"
            htmlFor="week"
          >
            Last week
          </label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default DateRangeFilter;
