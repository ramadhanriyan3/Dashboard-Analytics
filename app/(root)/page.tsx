"use client";

import { SlidersHorizontal } from "lucide-react";
import qs from "query-string";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DateRangeFilter from "@/components/dateRangeFilter";
import ScoreCard from "@/components/scoreCard";
import { sales, SaleType } from "@/lib/dataDummy";
import OverviewFilter from "@/components/overviewFilter";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import LineChart from "@/components/chart/LineChart";
import DoughnutChart from "@/components/chart/DoughnutChart";
import { useAnalyticsData } from "@/lib/dataTransform";
import { getGrowth } from "@/lib/mathHelp";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();

  const usesData = (saleData: SaleType) => {
    const query = qs.parse(searchParams.toString(), {
      types: {
        product: "string[]",
      },
    });

    const defaultEndDate = new Date().getTime();
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);
    const defaultStartDate = threeYearsAgo.getTime();

    const startDate = query?.start
      ? new Date(query.start as string).getTime()
      : defaultStartDate;
    const endDate = query?.end
      ? new Date(query.end as string).getTime()
      : defaultEndDate;

    const date = new Date(saleData.date).getTime();
    const product = query.product?.includes(saleData.product);

    const isWithinDateRange =
      (startDate <= date && date <= endDate) ||
      (startDate === date && date === endDate);

    return query.product?.length
      ? isWithinDateRange && product
      : isWithinDateRange;
  };

  const previousUsesData = (saleData: SaleType) => {
    const query = qs.parse(searchParams.toString(), {
      types: {
        product: "string[]",
      },
    });

    const startDate = query?.start
      ? new Date(query.start as string).getTime()
      : new Date(
          new Date().setFullYear(new Date().getFullYear() - 3)
        ).getTime();

    const endDate = query?.end
      ? new Date(query.end as string).getTime()
      : new Date().getTime();

    const date = new Date(saleData.date).getTime();
    const duration = endDate - startDate;

    const previousEndDate = startDate - 1;
    const previousStartDate = previousEndDate - duration;

    const product = query.product?.includes(saleData.product);

    const isWithinDateRange =
      previousStartDate <= date && date <= previousEndDate;

    return query.product?.length
      ? isWithinDateRange && product
      : isWithinDateRange;
  };

  const onCancel = () => setIsOpen(false);

  const filteredData = sales.filter(usesData);

  const previousData = sales.filter(previousUsesData);

  console.log({ now: filteredData.length, prev: previousData.length });

  const {
    lineChartData,
    doughnutChartData,
    totalRevenue,
    totalQuantities,
    totalOrders,
  } = useAnalyticsData(filteredData);

  const {
    totalRevenue: previousTotalRevenue,
    totalQuantities: previousTotalQuantities,
    totalOrders: previousTotalOrders,
  } = useAnalyticsData(previousData);

  return (
    <div className="w-full h-full bg-transparent flex flex-col gap-y-5">
      <div className="bg-white p-4 w-full rounded-md flex items-center justify-between">
        <DateRangeFilter />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger>
            <div className="p-1 border border-primary rounded-md">
              <SlidersHorizontal className="text-primary " />
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle></DialogTitle>
            <OverviewFilter handleCancel={onCancel} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col sm:flex-row gap-y-2  gap-x-4 items-center justify-between w-full">
        <ScoreCard
          label="Total Revenue"
          total={totalRevenue}
          growth={getGrowth(totalRevenue, previousTotalRevenue)}
          isCurency
        />
        <ScoreCard
          label="Total Sales"
          total={totalQuantities}
          growth={getGrowth(totalQuantities, previousTotalQuantities)}
        />
        <ScoreCard
          label="Total Order"
          total={totalOrders}
          growth={getGrowth(totalOrders, previousTotalOrders)}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-y-4 md:gap-x-5">
        <div className="w-full  bg-white rounded-lg lg:p-6 p-4">
          <LineChart
            data={Object.values(lineChartData)}
            xTicks={Object.keys(lineChartData)}
            title={"Total Revenue"}
          />
        </div>
        <div className="w-fit  bg-white rounded-lg lg:p-6 p-4">
          <DoughnutChart
            data={Object.values(doughnutChartData)}
            labels={Object.keys(doughnutChartData)}
            title={"Total Sales"}
          />
        </div>
      </div>
    </div>
  );
}
