import { Title } from "../title/title";
import s from "./my-course.module.css";
export const MyCourse = () => {
  return (
    <div className={s.course_box}>
      <div className={s.flex}>
        <Title text="Наши курсы" />
        <button className={s.btn}>Новый курс</button>
      </div>
      <div className={s.courses}>
        <div className={s.course}>
          <p className={s.course_title}>Название курса</p>
          <ul className={s.course_ul}>
            <li className={s.course_link}>База УЧР</li>
            <li className={s.course_link}>История компании</li>
            <li className={s.course_link}>Тайм менеджмент</li>
          </ul>
        </div>
        <div className={s.course}>
          <p className={s.course_title}>Направления</p>
          <ul className={s.course_ul}>
            <li className={s.course_direction}>Менеджмент</li>
            <li className={s.course_direction}>Менеджмент</li>
            <li className={s.course_direction}>Менеджмент</li>
          </ul>
        </div>{" "}
        <div className={s.course}>
          <p className={s.course_title}>Продолжительность</p>
          <ul className={s.course_ul}>
            <li className={s.course_duration}>3 дня</li>
            <li className={s.course_duration}>3 дня</li>
            <li className={s.course_duration}>3 дня</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
