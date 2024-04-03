const { calculateCountDays } = require("./calculateCountDays");

test("Подсчет количества дней", () => {
  expect(
    calculateCountDays(
      new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
      new Date()
    )
  ).toBe(7);
});

export {};
