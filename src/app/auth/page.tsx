"use client";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Title } from "@/components/title/title";
import s from "./page.module.css";
import cn from "classnames";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/store";
import { userRegisterThunk } from "../GlobalRedux/slices/authSlice";
export function AuthPage() {
  const { message } = useAppSelector((state) => state.auth.error);
  const { profile } = useAppSelector((state) => state.profile);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      return router.replace("/");
    }
  }, []);
  const authClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(userRegisterThunk({ username, password }));
    if (window.localStorage.getItem("token")) {
      router.push("/");
    }
  };

  return (
    <>
      <div className={s.flex}>
        <div className={s.one}>
          <p className={s.text}>Платформа для онбординга сотрудников</p>
          <p className={cn(s.text, s.proscom)}>by PROSCOM</p>
        </div>
        <div className={s.two}>
          <div className={s.auth}>
            <Title text="Авторизация" />
            <form className={s.form}>
              <Label inputId="name" text="Логин" />
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="name"
                placeholder="Введите логин"
              />
              <Label inputId="password" text="Пароль" />
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Введите пароль"
              />
              {message && (
                <p
                  style={{
                    color: "red",
                    margin: "6px 0 0 0",
                    textAlign: "center",
                  }}
                >
                  {message}
                </p>
              )}
              <Button onClick={authClick} classname={s.btn} text="Войти" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
