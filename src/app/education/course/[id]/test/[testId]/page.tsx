"use client";
import { Box } from "@/components/box/box";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Test } from "@/components/test/test";
import { Text } from "@/components/text/text";
import { Wrapper } from "@/components/wrapper/wrapper";
import { SyntheticEvent, useEffect, useState } from "react";
import s from "./page.module.css";
import { Title } from "@/components/title/title";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/button/button";
import { Crumbs } from "@/components/crumbs/crumbs";
import { Crumb } from "@/components/crumb/crumb";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import { getCurrentEducationThunk } from "@/app/GlobalRedux/slices/educationSlice";

export function TestPage() {
  const [arrAnswer, setArrAnswer] = useState<string[]>([]);
  const [inputElement, setInputElement] = useState("");
  const dispatch = useAppDispatch();
  const { currentEducation } = useAppSelector((state) => state.education);
  const { error } = useAppSelector((state) => state.education);
  const [userToken, setUserToken] = useState("");
  const pathname = useParams();
  const router = useRouter();
  const id = pathname.testId as string;
  const [numTest, setNumTest] = useState(1);
  const test = currentEducation && currentEducation.test;
  const n = test?.length + 1;
  const procentAnswers =
    (arrAnswer.length / currentEducation?.test?.length) * 100;
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return router.push("/auth");
    } else {
      dispatch(getCurrentEducationThunk(id));
      setUserToken(token);
    }
  }, []);

  const clickTest = (e: SyntheticEvent, answer: string) => {
    e.preventDefault();
    if (answer === inputElement) {
      setArrAnswer((current) => [...current, inputElement]);
    }
    setNumTest((prev) => (prev += 1));
  };
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
                text={currentEducation && currentEducation?.name}
              />
              <Crumb
                activeLink={true}
                linkText={`/education/course/${id}/test/${id}`}
                text={`Тест к курсу ${
                  currentEducation && currentEducation?.name
                }`}
              />
            </Crumbs>
            <Box>
              {error?.message && (
                <p style={{ color: "red" }}>{error?.message}</p>
              )}
              <ul className={s.ul}>
                {test?.map((item) => {
                  if (Number(item.number) === numTest) {
                    return (
                      <li key={item.number}>
                        <Text text={item.question} />
                        <Test
                          inputElement={inputElement}
                          setInputElement={setInputElement}
                          A={item.options.A}
                          B={item.options.B}
                          C={item.options.C}
                          nextTest={(e) => clickTest(e, item.answer)}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
              {n === numTest && (
                <div className={s.flex}>
                  <Title
                    text={
                      procentAnswers >= 80 ? `Поздравляем!` : "Сочувствуем!"
                    }
                  />
                  <Text text={`${procentAnswers}%`} />
                  {
                    <Button
                      classname={s.btn}
                      text={
                        procentAnswers >= 80
                          ? "Вернуться"
                          : "Обязтально почитать и вернуться"
                      }
                      onClick={() => router.replace(`/education/course/${id}`)}
                    />
                  }
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
