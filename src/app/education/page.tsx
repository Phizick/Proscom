"use client";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { Course } from "@/components/course/course";
import { Box } from "@/components/box/box";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../GlobalRedux/store";
import {
  currentEducationClear,
  getEducationRoleThunk,
} from "../GlobalRedux/slices/educationSlice";
import s from "./page.module.css";
import { useRouter } from "next/navigation";
import { v4 as uuid } from "uuid";
const EducationPage = () => {
  const [userToken, setUserToken] = useState("");
  const router = useRouter();
  const { education } = useAppSelector((state) => state.education);
  const { profile } = useAppSelector((state) => state.profile);
  const { pending } = useAppSelector((state) => state.education);
  const { error } = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getEducationRoleThunk(profile?.role));
      dispatch(currentEducationClear());
      setUserToken(token);
    } else {
      router.replace("/auth");
    }
  }, [profile?.role, dispatch,router]);

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
                    <li className={s.li} key={uuid()}>
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
};

export default EducationPage;
