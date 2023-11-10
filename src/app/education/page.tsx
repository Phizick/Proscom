"use client";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { Course } from "@/components/course/course";
import { Box } from "@/components/box/box";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/store";
import { getEducationRoleThunk } from "../GlobalRedux/slices/educationSlice";
import s from "./page.module.css";
import { useRouter } from "next/navigation";
export function EducationPage() {
  const [userToken, setUserToken] = useState("");
  const router = useRouter();
  const { education } = useAppSelector((state) => state.education);
  const { pending } = useAppSelector((state) => state.education);
  const { error } = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const role = window.localStorage.getItem("role") as string;
    if (token) {
      dispatch(getEducationRoleThunk("PM"));
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
              {pending && education.length === 0 && <p>Загрузка</p>}
              {error?.message && (
                <p style={{ color: "red" }}>{error?.message}</p>
              )}
              <ul className={s.ul}>
                {education?.map((item) => {
                  return (
                    <li className={s.li} key={String(item._id)}>
                      <Course
                        textTitle={item.name}
                        textDescription="Описание курса"
                        textResult="Пройден на 0%"
                        textDeadline="Дедлайн через 3 дня"
                        textSpan="тест не пройден"
                        linkText={item._id}
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
