export function calculateCountDays(startDay: Date, endDay: Date): number {
  const countDay = Math.floor(
    (endDay.valueOf() - startDay.valueOf()) / (1000 * 86400)
  );

  return countDay;
}
