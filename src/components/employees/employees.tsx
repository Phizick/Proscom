import { Title } from "../title/title";
import cn from "classnames";
import s from "./employees.module.css";
export const Employees = () => {
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
      <div className={s.employees}>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Сотрудник</p>
          <ul className={s.employee_ul}>
            <li className={s.employee_name}>Text</li>
            <li className={s.employee_name}>Text</li>
            <li className={s.employee_name}>Text</li>
            <li className={s.employee_name}>Text</li>
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Должность</p>
          <ul className={s.employee_ul}>
            <li className={s.employee_post}>Менеджмент</li>
            <li className={s.employee_post}>Менеджмент</li>
            <li className={s.employee_post}>Менеджмент</li>
            <li className={s.employee_post}>Менеджмент</li>
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Назначенные курсы</p>
          <ul className={s.employee_ul}>
            <li className={s.employee_post}>Менеджмент</li>
            <li className={s.employee_post}>Менеджмент</li>
            <li className={s.employee_post}>Менеджмент</li>
            <li className={s.employee_post}>Менеджмент</li>
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Срок обучения</p>
          <ul className={s.employee_ul}>
            <li className={s.employee_date}>11.06.2023-13.06.2023</li>
            <li className={s.employee_date}>11.06.2023-13.06.2023</li>
            <li className={s.employee_date}>11.06.2023-13.06.2023</li>
            <li className={s.employee_date}>11.06.2023-13.06.2023</li>
          </ul>
        </div>
        <div className={s.employee_list}>
          <p className={s.employee_text}>Успеваемость</p>
          <ul className={s.employee_ul}>
            <li className={s.employee_deadline}>По графику</li>
            <li className={s.employee_deadline}>По графику</li>
            <li className={s.employee_deadline}>По графику</li>
            <li className={s.employee_deadline}>По графику</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
