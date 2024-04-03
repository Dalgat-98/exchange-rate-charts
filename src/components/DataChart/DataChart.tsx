import "./style.scss";

import { LineChart } from "@mui/x-charts";
import { Data, DataChartTypes } from "./../../types/types";

type dataCurrencyDateProps = {
  data: Data[];
  valute: string[];
};

type ArraySeriesType = {
  id: string;
  data: number[];
  label: string;
};

const DataChart = ({ data, valute }: dataCurrencyDateProps) => {
  const dateData: string[] = [];
  const objectArray: DataChartTypes = {};

  for (let i = 1; i < data.length; i++) {
    dateData.push(data[i].date);
    for (let item of valute) {
      if (!objectArray[item]) {
        objectArray[item] = [];
      }
      objectArray[item].push(data[i].rub[item]);
    }
  }

  const ArraySeries: ArraySeriesType[] = [];
  for (let item of valute) {
    ArraySeries.push({
      id: item,
      data: objectArray[item],
      label: item,
    });
  }

  return (
    <section className="chart">
      <LineChart
        xAxis={[{ scaleType: "point", data: dateData }]}
        series={ArraySeries}
        width={800}
        height={300}
      />
    </section>
  );
};

export default DataChart;
