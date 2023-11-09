import Link from "next/link";
import s from "./course.module.css";
import { FC } from "react";

interface IProps {
  textTitle: string;
  textDescription: string;
  textResult: string;
  textDeadline: string;
  textSpan: string;
  linkText: number;
}

export const Course: FC<IProps> = ({
  textTitle,
  textDescription,
  textResult,
  textDeadline,
  textSpan,
  linkText,
}) => {
  return (
    <>
      <Link className={s.course} href={`/education/course/${linkText}`}>
        <p className={s.title}>{textTitle}</p>
        <p className={s.description}>{textDescription}</p>
        <div className={s.flex}>
          <div className={s.flex__texts}>
            <p className={s.result}>{textResult}</p>
            <p className={s.deadline}>{textDeadline}</p>
          </div>
          <div>
            <p className={s.grade}>
              Оценка: <span className={s.grade__span}>{textSpan}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};
