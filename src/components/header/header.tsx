import { FC } from "react";
import s from "./header.module.css";
import Link from "next/link";
export const Header: FC = () => {
  const num = 0;
  const currentDate = new Date();
  const date1 = currentDate.toLocaleString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const date2 = currentDate.toLocaleString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <header className={s.header}>
      <h1 className={s.title}>
        <span className={s.by}>by </span> PROSCOM
      </h1>
      <p className={s.date}>
        {date1} <span className={s.date_span}>{date2}</span>
      </p>
      <div className={s.flex}>
        <div className={s.notif}>
          <button className={s.btn}></button>
          {num !== 0 && <p className={s.btn_num}>1</p>}
        </div>
        <Link href="/profile" className={s.avatar}>
          N
        </Link>
      </div>
    </header>
  );
};
