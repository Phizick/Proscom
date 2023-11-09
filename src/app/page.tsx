import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Statics } from "@/components/statics/statics";
import { Wrapper } from "@/components/wrapper/wrapper";
import { MyCourse } from "@/components/my-course/my-course";
import { Employees } from "@/components/employees/employees";
import { Box } from "@/components/box/box";
export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <Box>
          <Statics />
          <MyCourse />
          <Employees />
        </Box>
      </Wrapper>
    </PageWrapper>
  );
}
