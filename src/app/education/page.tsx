"use client";

import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import cn from "classnames";
import s from "./page.module.css";
import Link from "next/link";
export function EducationPage() {
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
          <div className={s.courses}>
            <p className={s.title_course}>1 курс для прохождения</p>
            <Link className={s.course} href="/education/course/123">
              <p className={s.title}>Тайм менеджмент</p>
              <p className={s.description}>Описание курса</p>
              <div className={s.flex}>
                <div className={s.flex__texts}>
                  <p className={s.result}>Пройден на 0%</p>
                  <p className={s.deadline}>Дедлайн через 3 дня</p>
                </div>
                <div>
                  <p className={s.grade}>
                    Оценка:{" "}
                    <span className={s.grade__span}>тест не пройден</span>
                  </p>
                </div>
              </div>
            </Link>
            <div className={cn(s.course1, s.completed_courses)}>
              <p className={s.title_course}>Пройденные курсы</p>
              <div className={s.course}>
                <p className={s.title}>Тайм менеджмент</p>
                <p className={s.description}>Описание курса</p>
                <div className={s.flex}>
                  <div className={s.flex__texts}>
                    <p className={s.result}>Пройден на 0%</p>
                    <p className={s.deadline}>Дедлайн через 3 дня</p>
                  </div>
                  <div>
                    <p className={s.grade}>
                      Оценка:{" "}
                      <span className={s.grade__span}>тест не пройден</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.course}>
              <p className={s.title}>Тайм менеджмент</p>
              <p className={s.description}>Описание курса</p>
              <div className={s.flex}>
                <div className={s.flex__texts}>
                  <p className={cn(s.result, s.result_o)}>Пройден на 0%</p>
                  <p className={cn(s.deadline, s.deadline_no)}>
                    Дедлайн через 3 дня
                  </p>
                </div>
                <div>
                  <p className={s.grade}>
                    Оценка:
                    <span className={s.grade__span}> тест не пройден</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default EducationPage;
