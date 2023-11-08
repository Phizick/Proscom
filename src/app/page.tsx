import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Statics } from "@/components/statics/statics";
import { Wrapper } from "@/components/wrapper/wrapper";
import s from "./page.module.css";
import { MyCourse } from "@/components/my-course/my-course";
import { Employees } from "@/components/employees/employees";
export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <div className={s.flex}>
          <Statics />
          <MyCourse />
          <Employees />
        </div>
      </Wrapper>
    </PageWrapper>
  );
}
