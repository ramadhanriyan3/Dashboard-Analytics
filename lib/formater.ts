export const growthFormatter = (num: number) => {
  return new Intl.NumberFormat("default", {
    style: "percent",
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  }).format(num);
};
