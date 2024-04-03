import { calculateCountDays } from "../util/calculateCountDays/calculateCountDays";

// Делаем запрос
async function load(url: string) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

// Загрузка всех дней
export async function daysData(start: Date, end: Date, url: string) {
  const countDay = calculateCountDays(start, end);
  const newDataValute = [{ date: "", rub: {} }];
  const arrayDate = [start.toLocaleDateString().split(".").reverse().join("-")];

  for (let i = 1; i < countDay; i++) {
    arrayDate.push(
      new Date(start.valueOf() + 1000 * 60 * 60 * 24 * i)
        .toLocaleDateString()
        .split(".")
        .reverse()
        .join("-")
    );
  }

  for (let i = 0; i < arrayDate.length; i++) {
    newDataValute.push(
      await load(url + arrayDate[i] + "/v1/currencies/rub.json")
    );
  }

  return newDataValute;
}
