"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import s from "./statics.module.css";
import { Title } from "../title/title";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Получается", "Не получается"],
  datasets: [
    {
      data: [12, 19],
      backgroundColor: ["green", "red"],
    },
  ],
};

export const Statics = () => {
  return (
    <div className={s.box}>
      <Title text="Статистика" />
      <div className={s.flex}>
        <div>
          <p className={s.text}>
            Всего <span className={s.span}>32 сотрудника</span>
          </p>
          <p className={s.text}>
            Обучаются <span className={s.span}>4 сотрудника</span>
          </p>
          <p className={s.text}>
            Успеваемость <span className={s.span}>Средняя</span>
          </p>
        </div>

        <div className={s.static}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};
