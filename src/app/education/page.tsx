"use client";

import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { Course } from "@/components/course/course";
import { Box } from "@/components/box/box";
import { Text } from "@/components/text/text";
export function EducationPage() {
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <Box>
          <Text text="1 курс для прохождения" />
          <Course
            textTitle="Тайм менеджмент"
            textDescription="Описание курса"
            textResult="Пройден на 0%"
            textDeadline="Дедлайн через 3 дня"
            textSpan="тест не пройден"
            linkText="123"
          />
          <Text text="Пройденные курсы" />
          <Course
            textTitle="Тайм менеджмент"
            textDescription="Описание курса"
            textResult="Пройден на 0%"
            textDeadline="Дедлайн через 3 дня"
            textSpan="тест не пройден"
            linkText="1234"
          />
        </Box>
      </Wrapper>
    </PageWrapper>
  );
}

export default EducationPage;
