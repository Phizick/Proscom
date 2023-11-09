"use client";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { Course } from "@/components/course/course";
import { Box } from "@/components/box/box";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/store";
import { getEducationThunk } from "../GlobalRedux/slices/educationSlice";
import s from "./page.module.css";
import { useRouter } from "next/navigation";
export function EducationPage() {
  const [userToken, setUserToken] = useState("");
  const { profile } = useAppSelector((state) => state.profile);
  const router = useRouter();
  const { education } = useAppSelector((state) => state.education);
  const { pending } = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getEducationThunk());
      setUserToken(token);
    } else {
      router.replace("/auth");
    }
  }, []);

  return (
    <>
      {userToken && (
        <PageWrapper>
          <Header />
          <Wrapper>
            <Box>
              {pending && <p>Загрузка</p>}
              <ul className={s.ul}>
                {education?.map((item: any, index: number) => {
                  return (
                    <li className={s.li} key={String(index)}>
                      <Course
                        textTitle={item.name}
                        textDescription="Описание курса"
                        textResult="Пройден на 0%"
                        textDeadline="Дедлайн через 3 дня"
                        textSpan="тест не пройден"
                        linkText={index}
                      />
                    </li>
                  );
                })}
              </ul>
            </Box>
          </Wrapper>
        </PageWrapper>
      )}
    </>
  );
}

export default EducationPage;
