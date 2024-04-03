const { gettingLastWeek } = require("./gettingLastWeek");

const lastDate: Date[] = [
  new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
  new Date(),
];

test("Получение последней недели", () => {
  const lastDate = gettingLastWeek();
  expect(lastDate[0].toLocaleDateString()).toEqual(
    lastDate[0].toLocaleDateString()
  );
  expect(lastDate[1].toLocaleDateString()).toEqual(
    lastDate[1].toLocaleDateString()
  );
});

export {};
