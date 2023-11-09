"use client";
import { Crumb } from "@/components/crumb/crumb";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Title } from "@/components/title/title";
import { Description } from "@/components/description/description";
import { Box } from "@/components/box/box";
import { Crumbs } from "@/components/crumbs/crumbs";
import { Text } from "@/components/text/text";
import { useAppDispatch, useAppSelector } from "@/app/GlobalRedux/store";
import { useEffect, useState } from "react";
import { getEducationThunk } from "@/app/GlobalRedux/slices/educationSlice";
export function CoursePage() {
  const [userToken, setUserToken] = useState("");
  const { education } = useAppSelector((state) => state.education);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      dispatch(getEducationThunk());
      setUserToken(token);
    }
  }, []);
  const currentEducation =
    id &&
    education &&
    education.find((item: any, index: number) => index === id);
  console.log(currentEducation);
  return (
    <>
      {userToken && (
        <PageWrapper>
          <Header />
          <Wrapper>
            <Crumbs>
              <Crumb activeLink={false} linkText="/education" text="Курсы" />
              {education && (
                <Crumb
                  activeLink={true}
                  linkText={`/education/course/${id}`}
                  text={education ? currentEducation?.name : "Загрузка"}
                />
              )}
            </Crumbs>

            <Box>
              <Title text={education ? currentEducation?.name : "Загрузка"} />
              <Description text="Описание курса" />
              {currentEducation?.content ? (
                <p>{currentEducation?.content}</p>
              ) : (
                <Text text="Загрузка..." />
              )}
              {currentEducation?.test && <button>Пройти тест</button>}
            </Box>
          </Wrapper>
        </PageWrapper>
      )}
    </>
  );
}

export default CoursePage;
