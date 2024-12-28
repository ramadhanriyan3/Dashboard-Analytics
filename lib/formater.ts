export const growthFormatter = (num: number) => {
  return new Intl.NumberFormat("default", {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(num);
};

export const formatCurrency = (
  value: number,
  currency: string,
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
