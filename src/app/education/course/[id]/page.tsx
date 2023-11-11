"use client";
import { Crumb } from "@/components/crumb/crumb";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { useParams, useRouter } from "next/navigation";
import { Title } from "@/components/title/title";
import { Description } from "@/components/description/description";
import { Box } from "@/components/box/box";
import { Crumbs } from "@/components/crumbs/crumbs";
import { Text } from "@/components/text/text";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import { useEffect, useState } from "react";
import { Button } from "@/components/button/button";
import s from "./page.module.css";
import { getCurrentEducationThunk } from "@/app/GlobalRedux/slices/educationSlice";
const CoursePage = () => {
  const [userToken, setUserToken] = useState("");
  const { currentEducation } = useAppSelector((state) => state.education);
  const { error } = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getCurrentEducationThunk(id));
      setUserToken(token);
    } else {
      return router.push("/auth");
    }
  }, [id,dispatch,router]);
  return (
    <>
      {userToken && (
        <PageWrapper>
          <Header />
          <Wrapper>
            <Crumbs>
              <Crumb activeLink={false} linkText="/education" text="Курсы" />
              {currentEducation && (
                <Crumb
                  activeLink={true}
                  linkText={`/education/course/${id}`}
                  text={currentEducation ? currentEducation?.name : "Загрузка"}
                />
              )}
            </Crumbs>

            <Box>
              {error?.message && (
                <p style={{ color: "red" }}>{error?.message}</p>
              )}
              <Title
                text={currentEducation ? currentEducation?.name : "Загрузка"}
              />
              <Description text="Описание курса" />
              {currentEducation?.content ? (
                <p className={s.descr}>{currentEducation?.content}</p>
              ) : (
                <Text text="Загрузка..." />
              )}
              {currentEducation?.test && (
                <Button
                  classname={s.btn}
                  text="Пройти тест"
                  onClick={() =>
                    router.replace(`/education/course/${id}/test/${id}`)
                  }
                />
              )}
            </Box>
          </Wrapper>
        </PageWrapper>
      )}
    </>
  );
}

export default CoursePage;
