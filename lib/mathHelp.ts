export const getGrowth = (now: number, prev: number) => {
  let result = 0;

  if (prev === 0 && now > 0) {
    result = Math.log(now) * 100;
  } else {
    result = (now - prev) / prev;
  }

  console.log({ result, now, prev });
  return result;
};
