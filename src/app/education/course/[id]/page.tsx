"use client";
import { Crumb } from "@/components/crumb/crumb";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Wrapper } from "@/components/wrapper/wrapper";
import s from "./page.module.css";
import { usePathname } from "next/navigation";
import { Title } from "@/components/title/title";
import { Description } from "@/components/description/description";
export function CoursePage() {
  const textCourse = usePathname().split("/").reverse()[0];
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <div className={s.crumbs}>
          <Crumb activeLink={false} linkText="/education" text="Курсы" />
          <Crumb
            activeLink={true}
            linkText="/education/course/123"
            text={textCourse}
          />
        </div>

        <div className={s.wrapper}>
          <Title text={textCourse} />
          <Description text="Описание курса" />
        </div>
      </Wrapper>
    </PageWrapper>
  );
}

export default CoursePage;
