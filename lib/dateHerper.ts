export const getDateRanges = () => {
  const today = new Date();

  const lastWeekStart = new Date(today);
  lastWeekStart.setDate(today.getDate() - 7);

  const lastMonthStart = new Date(today);
  lastMonthStart.setMonth(today.getMonth() - 1);

  const lastYearStart = new Date(today);
  lastYearStart.setFullYear(today.getFullYear() - 1);

  const getDate = (date: Date) => date.toISOString().slice(0, 10);

  return {
    lastWeek: {
      start: getDate(lastWeekStart),
      end: getDate(today),
    },
    lastMonth: {
      start: getDate(lastMonthStart),
      end: getDate(today),
    },
    lastYear: {
      start: getDate(lastYearStart),
      end: getDate(today),
    },
  };
};
