import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import DataChart from "./components/DataChart/DataChart";
import { daysData } from "./api/makeRequest";
import { Data } from "./types/types";
import { gettingLastWeek } from "./util/gettingLastWeek/gettingLastWeek";

const Home = () => {
  const [data, setData] = useState<Data[]>([]);
  const [valuteList, setvaluteList] = useState<string[]>([]);
  const [dateStartEnd, setDateStartEnd] = useState(gettingLastWeek);
  const [countRequests, setCountRequests] = useState(0);

  const urlLoad = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@";

  // При изменений дат, вызываем функцию загрузки данных
  useEffect(() => {
    loadData();
  }, [dateStartEnd]);

  // Загрузка данных
  async function loadData() {
    const data = await daysData(dateStartEnd[0], dateStartEnd[1], urlLoad);
    setData(data);
    setCountRequests(countRequests + 1);
  }

  // Менеям массив дат
  const changeDateStart = (Event: any) => {
    // setDateStartEnd([new Date(Event.target.value), dateStartEnd[1]]);
    if (
      new Date(Event.target.value).valueOf() - dateStartEnd[1].valueOf() >=
      0
    ) {
      alert("Для получения новых данных, выберите другую дату!");
    } else if (
      new Date(Event.target.value).valueOf() !== dateStartEnd[0].valueOf()
    ) {
      setDateStartEnd([new Date(Event.target.value), dateStartEnd[1]]);
    }
  };
  const changeDateEnd = (Event: any) => {
    // setDateStartEnd([dateStartEnd[0], new Date(Event.target.value)]);
    if (
      new Date(Event.target.value).valueOf() - dateStartEnd[0].valueOf() <=
      0
    ) {
      alert("Для получения новых данных, выберите другую дату!");
    } else if (
      new Date(Event.target.value).valueOf() !== dateStartEnd[1].valueOf()
    ) {
      setDateStartEnd([dateStartEnd[0], new Date(Event.target.value)]);
    }
  };

  //Меняем массив валют, которые нужно показывать
  const changeValute = (item: string) => {
    if (valuteList.includes(item)) {
      setvaluteList(valuteList.filter((it) => it !== item));
    } else {
      setvaluteList([...valuteList, item]);
    }
  };

  return (
    <>
      <header className="header">
        <h1>Data Chart</h1>
      </header>
      <main className="main">
        <Form
          valute={["eur", "usd", "cny"]}
          changeValute={changeValute}
          changeDateStart={changeDateStart}
          changeDateEnd={changeDateEnd}
        />
        <DataChart data={data} valute={valuteList} />
      </main>
      <footer className="footer">
        <p>Число запросов в API: {countRequests}</p>
      </footer>
    </>
  );
};

export default Home;
