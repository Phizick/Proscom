"use client";
import { FC, useEffect } from "react";
import s from "./header.module.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import { getUserThunk } from "@/app/GlobalRedux/slices/profileSlice";
import { useRouter } from "next/navigation";
export const Header: FC = () => {
  const router = useRouter();
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
  const { profile } = useAppSelector((state) => state.profile);
  const { error } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserThunk(window.localStorage.getItem("token") as string));
  }, [dispatch]);
  const name = profile.username?.charAt(0).toUpperCase();

  return (
    <header className={s.header}>
      {error?.message && <p style={{ color: "red" }}>{error?.message}</p>}
      <h1 onClick={() => router.replace("/")} className={s.title}>
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
          {name}
        </Link>
      </div>
    </header>
  );
};
