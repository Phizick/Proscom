"use client";
import { Box } from "@/components/box/box";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Test } from "@/components/test/test";
import { Text } from "@/components/text/text";
import { Wrapper } from "@/components/wrapper/wrapper";
import { useEffect, useState } from "react";
import s from "./page.module.css";
import { Title } from "@/components/title/title";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/button/button";
import { Crumbs } from "@/components/crumbs/crumbs";
import { Crumb } from "@/components/crumb/crumb";
export function TestPage() {
  7;
  const [userToken, setUserToken] = useState("");
  const pathname = useParams();
  const router = useRouter();
  const id = pathname.testId as string;
  const [numTest, setNumTest] = useState(1);
  const test = [
    {
      answer: "B",
      number: "1",
      options: {
        A: "Проведение международных проектов.1",
        B: "Создание полезных инновационных сервисов.1",
        C: "Продажа стандартных приложений и систем.1",
      },
      question: "Какую основную ценность придерживается Proscom1",
    },
    {
      answer: "A",
      number: "2",
      options: {
        A: "Проведение международных проектов.2",
        B: "Создание полезных инновационных сервисов.2",
        C: "Продажа стандартных приложений и систем.3",
      },
      question: "Какую основную ценность придерживается Proscom2",
    },
    {
      answer: "C",
      number: "3",
      options: {
        A: "Проведение международных проектов.3",
        B: "Создание полезных инновационных сервисов.2",
        C: "Продажа стандартных приложений и систем.",
      },
      question: "Какую основную ценность придерживается Proscom3",
    },
  ];
  const n = test.length + 1;
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return router.push("/auth");
    } else {
      setUserToken(token);
    }
  }, []);
  return (
    <>
      {userToken && (
        <PageWrapper>
          <Header />
          <Wrapper>
            <Crumbs>
              <Crumb activeLink={false} linkText="/education" text="Курсы" />
              <Crumb
                activeLink={false}
                linkText={`/education/course/${id}`}
                text="Курс 1"
              />
              <Crumb
                activeLink={true}
                linkText={`/education/course/${id}/test/${id}`}
                text="Тест к курсу 1"
              />
            </Crumbs>
            <Box>
              <ul className={s.ul}>
                {test.map((item, index) => {
                  if (Number(item.number) === numTest) {
                    return (
                      <li key={index}>
                        <Text text={item.question} />
                        <Test
                          A={item.options.A}
                          B={item.options.B}
                          C={item.options.C}
                          nextTest={() => setNumTest((prev) => (prev += 1))}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
              {n === numTest && (
                <div className={s.flex}>
                  <Title text="Поздравляем!" />
                  <Button
                    classname={s.btn}
                    text="Вернуться"
                    onClick={() => router.replace(`/education/course/${id}`)}
                  />
                </div>
              )}
            </Box>
          </Wrapper>
        </PageWrapper>
      )}
    </>
  );
}

export default TestPage;
