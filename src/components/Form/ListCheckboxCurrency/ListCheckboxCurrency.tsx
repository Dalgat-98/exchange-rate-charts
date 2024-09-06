import "./style.scss";

import { ReactElement } from "react";

type ListCheckboxCurrencyProps<T> = {
  valute: string[];
  changeValute: (item: string) => void;
};

const ListCheckboxCurrency = <T extends React.ReactNode>({
  valute,
  changeValute,
}: ListCheckboxCurrencyProps<T>) => {
  const valuteList: ReactElement[] = [];

  valute.map((item, index): void => {
    valuteList.push(
      <li key={index} className="valute-list__item">
        <input
          type="checkbox"
          id={"checkbox-valute-" + item}
          name="input-valute"
          onChange={() => {
            changeValute(item);
          }}
        />
        <label htmlFor={"checkbox-valute-" + item}>{item}</label>
      </li>
    );
  });

  return (
    <>
      <ul className="valute-list">
        {valuteList}
        {valuteList.length < 1 && "Загрузка данных..."}
      </ul>
    </>
  );
};

export default ListCheckboxCurrency;
