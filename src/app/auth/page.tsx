"use client";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Title } from "@/components/title/title";
import s from "./page.module.css";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";
export function AuthPage() {
  const router = useRouter();
  const authClick = (e: SyntheticEvent) => {
    e.preventDefault();
    return router.replace("/");
  };
  return (
    <div className={s.flex}>
      <div className={s.one}>
        <p className={s.text}>Платформа для онбординга сотрудников</p>
        <p className={cn(s.text, s.proscom)}>by PROSCOM</p>
      </div>
      <div className={s.two}>
        <div className={s.auth}>
          <Title text="Авторизация" />
          <form className={s.form}>
            <Label inputId="email" text="E-mail" />
            <Input type="text" id="email" placeholder="Введите e-mail" />
            <Label inputId="password" text="Пароль" />
            <Input type="password" id="password" placeholder="Введите пароль" />
            <Button onClick={authClick} classname={s.btn} text="Войти" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
