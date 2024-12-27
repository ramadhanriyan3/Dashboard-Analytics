import { SaleType } from "./dataDummy";
import qs from "query-string";

export const useAnalyticsData = (rawData: SaleType[]) => {
  //lineChart uses
  const dataByMonth = rawData.reduce<Record<string, number>>((result, item) => {
    const month = new Date(item.date).toISOString().slice(0, 7);
    if (!result[month]) {
      result[month] = 0;
    }
    result[month] += item.totalPrice;
    return result;
  }, {});

  const dataByDay = rawData.reduce<Record<string, number>>((result, item) => {
    const day = new Date(item.date).toISOString().slice(5, 10);
    if (!result[day]) {
      result[day] = 0;
    }
    result[day] += item.totalPrice;
    return result;
  }, {});

  const lineChartData =
    Object.keys(dataByMonth).length < 3 ? dataByDay : dataByMonth;

  // doughnutChart uses
  const doughnutData = rawData.reduce<Record<string, number>>(
    (result, item) => {
      const product = item.product;
      if (!result[product]) {
        result[product] = 0;
      }
      result[product] += item.quantity;
      return result;
    },
    {}
  );

  const doughnutSorted = Object.entries(doughnutData).sort(
    ([, totalA], [, totalB]) => totalB - totalA
  );

  const topThree = doughnutSorted.slice(0, 3);
  const othersTotal = doughnutSorted
    .slice(3)
    .reduce((sum, [, total]) => sum + total, 0);

  if (othersTotal > 0) {
    topThree.push(["others", othersTotal]);
  }

  const doughnutChartData = Object.fromEntries(topThree);

  //   score card uses
  const totalRevenue = rawData.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  const totalQuantities = rawData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalOrders = rawData.length;

  return {
    lineChartData,
    doughnutChartData,
    totalRevenue,
    totalQuantities,
    totalOrders,
  };
};

export const dataFilter = (
  saleData: SaleType,
  searchParams: URLSearchParams
) => {
  const query = qs.parse(searchParams.toString(), {
    types: {
      product: "string[]",
    },
  });

  const startDate = new Date(query?.start as string).getTime();
  const endDate = new Date(query?.end as string).getTime();
  const date = new Date(saleData.date).getTime();
  const product = query.product?.includes(saleData.product);

  const isWithinDateRange =
    (startDate <= date && date <= endDate) ||
    (startDate === date && date === endDate);

  return query.product?.length
    ? isWithinDateRange && product
    : isWithinDateRange;
};
