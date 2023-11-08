"use client";

import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import s from "./page.module.css";
import { Course } from "@/components/course/course";
export function EducationPage() {
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <div className={s.wrapper}>
          <p className={s.title_course}>1 курс для прохождения</p>
          <Course
            textTitle="Тайм менеджмент"
            textDescription="Описание курса"
            textResult="Пройден на 0%"
            textDeadline="Дедлайн через 3 дня"
            textSpan="тест не пройден"
            linkText="123"
          />
          <p className={s.title_course}>Пройденные курсы</p>

          <Course
            textTitle="Тайм менеджмент"
            textDescription="Описание курса"
            textResult="Пройден на 0%"
            textDeadline="Дедлайн через 3 дня"
            textSpan="тест не пройден"
            linkText="1234"
          />
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default EducationPage;
