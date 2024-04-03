import "./style.scss";

import { ReactElement } from "react";
import ListInputDate from "./ListInputDate/ListInputDate";
import ListCheckboxCurrency from "./ListCheckboxCurrency/ListCheckboxCurrency";

type FormProps<T> = {
  valute: string[];
  changeValute: (item: string) => void;
  changeDateStart: (item: any) => void;
  changeDateEnd: (item: any) => void;
};

const Form = <T extends React.ReactNode>({
  valute,
  changeValute,
  changeDateStart,
  changeDateEnd,
}: FormProps<T>) => {
  return (
    <>
      <form className="form">
        <ListCheckboxCurrency valute={valute} changeValute={changeValute} />

        <ListInputDate
          changeDateStart={(Event) => changeDateStart(Event)}
          changeDateEnd={(Event) => changeDateEnd(Event)}
        />
      </form>
    </>
  );
};

export default Form;
