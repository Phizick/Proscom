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
const AuthPage = () => {
  const { message } = useAppSelector((state) => state.auth.error);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [priority, setPriority] = useState("");
  const [role, setRole] = useState("default");
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      return router.replace("/");
    }
  }, [router]);
  const authClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    await dispatch(
      userRegisterThunk({
        username,
        password,
        priority: priority === "" ? "0" : priority,
        role: role === "default" ? "others" : role,
      })
    );
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
                required={true}
              />
              <Label
                inputId="priority"
                text="Приоритет 1-HR & 2-Пользователь"
              />
              <Input
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                type="text"
                id="priority"
                placeholder="1 или 0"
                required={true}
              />
              <Label
                inputId="role"
                text="Выберите роль: (PM, dev,sales,design,others)"
              />
              <select
                required={true}
                defaultValue={role}
                id="role"
                className={s.select}
                name="select"
                onChange={(e) => setRole(e.target.value)}
              >
                <option disabled className={s.option} value="default">
                  Выберите пользователя
                </option>
                <option className={s.option} value="PM">
                  Проджект менеджер
                </option>
                <option className={s.option} value="dev">
                  Разработчик
                </option>
                <option className={s.option} value="sales">
                  Продажник
                </option>
                <option className={s.option} value="design">
                  Дизайнер
                </option>
                <option className={s.option} value="others">
                  Прочее
                </option>
              </select>
              <Label inputId="password" text="Пароль" />

              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Введите пароль"
                required={true}
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
};

export default AuthPage;
