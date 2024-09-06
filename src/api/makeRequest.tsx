import { calculateCountDays } from "../util/calculateCountDays/calculateCountDays";

// Делаем запрос
async function load(url: string) {
  let isLoading = true;
  let data = null;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.statusText}`);
    }

    data = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки:", error);
  } finally {
    isLoading = false;
  }

  return { data, isLoading };
}

const apiKey = "En2uPI96Gir70YKg9qjFgJHY6mCb2tbk";

// Загрузка всех дней
export async function daysData(start: Date, end: Date, url: string) {
  const countDay = calculateCountDays(start, end);
  const newDataValute = [{ date: "", rub: {} }];
  const arrayDate = [start.toLocaleDateString().split(".").reverse().join("-")];

  for (let i = 0; i < countDay; i++) {
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
      (await load(url + "&date=" + arrayDate[i] + "&api_key=" + apiKey)).data
    );
  }

  return newDataValute;
}
