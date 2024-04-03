import "./style.scss";

import { useState } from "react";
import { gettingLastWeek } from "./../../../util/gettingLastWeek/gettingLastWeek";

type ListInputDateProps<T> = {
  changeDateStart: (item: any) => void;
  changeDateEnd: (item: any) => void;
};

const ListInputDate = <T extends React.ReactNode>({
  changeDateStart,
  changeDateEnd,
}: ListInputDateProps<T>) => {
  const [dateStartEnd, setDateStartEnd] = useState<any[]>(gettingLastWeek);

  const dateStart = (Event: any) => {
    if (
      new Date(Event.target.value).valueOf() - dateStartEnd[1].valueOf() >=
      0
    ) {
      alert("Для получения новых данных, выберите другую дату!");
    } else if (
      new Date(Event.target.value).valueOf() !== dateStartEnd[0].valueOf()
    ) {
      setDateStartEnd([new Date(Event.target.value), dateStartEnd[1]]);
      changeDateStart(Event);
    }
  };

  const dateEnd = (Event: any) => {
    if (
      new Date(Event.target.value).valueOf() - dateStartEnd[0].valueOf() <=
      0
    ) {
      alert("Для получения новых данных, выберите другую дату!");
    } else if (
      new Date(Event.target.value).valueOf() !== dateStartEnd[1].valueOf()
    ) {
      setDateStartEnd([dateStartEnd[0], new Date(Event.target.value)]);
      changeDateEnd(Event);
    }
  };

  return (
    <>
      <ul className="date-list">
        <li className="date-list__item">
          <label htmlFor="input-date-start">Дата с</label>
          <input
            type="date"
            id="input-date-start"
            name="input-date-start"
            onChange={(Event) => dateStart(Event)}
            value={dateStartEnd[0]
              .toLocaleDateString()
              .split(".")
              .reverse()
              .join("-")}
          />
        </li>
        <li className="date-list__item">
          <label htmlFor="input-date-end">Дата по</label>
          <input
            type="date"
            id="input-date-end"
            name="input-date-end"
            onChange={(Event) => dateEnd(Event)}
            value={dateStartEnd[1]
              .toLocaleDateString()
              .split(".")
              .reverse()
              .join("-")}
          />
        </li>
      </ul>
    </>
  );
};

export default ListInputDate;
