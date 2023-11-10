"use client";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Statics } from "@/components/statics/statics";
import { Wrapper } from "@/components/wrapper/wrapper";
import { MyCourse } from "@/components/my-course/my-course";
import { Employees } from "@/components/employees/employees";
import { Box } from "@/components/box/box";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "./GlobalRedux/store";
export default function Home() {
  const { profile } = useAppSelector((state) => state.profile);
  const [tokenActive, setTokenActive] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      setTokenActive(false);
      return router.replace("/auth");
    } else {
      setTokenActive(true);
    }
  }, []);
  return (
    <>
      {tokenActive ? (
        <PageWrapper>
          <Header />
          <Wrapper>
            <Box>
              <Statics />
              {profile.priority === "1" && <MyCourse />}
              {profile.priority === "1" && <Employees />}
            </Box>
          </Wrapper>
        </PageWrapper>
      ) : (
        ""
      )}
    </>
  );
}
