// export interface Data {
//   date: string;
//   rub: Record<string, number>;
// }

export type DataChartTypes = Record<string, any[]>;

type Rates = {
  [currencyCode: string]: number; // Ключ — код валюты, значение — курс (число)
};

export interface Data {
  base: string;
  date: string;
  meta: {
    code: number;
    disclaimer: string;
  };
  rates: Rates;
}
