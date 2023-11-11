import { Title } from "../title/title";
import cn from "classnames";
import s from "./employees.module.css";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import { useEffect } from "react";
import { getUsersThunk } from "@/app/GlobalRedux/slices/usersSlice";
import { Text } from "../text/text";
export const Employees = () => {
  const { profile } = useAppSelector((state) => state.profile);
  const { users } = useAppSelector((state) => state.users);
  const { pending } = useAppSelector((state) => state.users);
  const { error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsersThunk());
  }, [dispatch]);
  const filterUsers = users.filter((user) => user._id !== profile._id);
  return (
    <div className={s.box}>
      <Title text="Ваши сотрудники" />
      <ul className={s.ul_employee}>
        <p className={cn(s.li_employee, s.li_employee_active)}>
          Проходят обучение
        </p>
        <p className={cn(s.li_employee)}>Прошли обучение</p>
        <p className={cn(s.li_employee)}>Все сотрудники</p>
      </ul>
      {error?.message && <p style={{ color: "red" }}>{error?.message}</p>}
      {pending && <Text text="Загрузка" />}
      <div className={s.employees}>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Сотрудник</p>
          <ul className={s.employee_ul}>
            {users &&
              filterUsers.map((user) => {
                return (
                  <li className={s.employee_name} key={user._id}>
                    {user.username}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Должность</p>
          <ul className={s.employee_ul}>
            {users &&
              filterUsers.map((user) => {
                return (
                  <li className={s.employee_post} key={user._id}>
                    {user.role}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Назначенные курсы</p>
          <ul className={s.employee_ul}>
            {users &&
              filterUsers.map((user) => {
                return (
                  <li className={s.employee_post} key={user._id}>
                    {user.role}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Срок обучения</p>
          <ul className={s.employee_ul}>
            {users &&
              filterUsers.map((user) => {
                return (
                  <li className={s.employee_date} key={user._id}>
                    11.06.2023-13.06.2023
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Успеваемость</p>
          <ul className={s.employee_ul}>
            {users &&
              filterUsers.map((user) => {
                return (
                  <li className={s.employee_deadline} key={user._id}>
                    По графику
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
