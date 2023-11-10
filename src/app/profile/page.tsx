"use client";
import { Box } from "@/components/box/box";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Title } from "@/components/title/title";
import { Wrapper } from "@/components/wrapper/wrapper";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import s from "./page.module.css";
import { Button } from "@/components/button/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "../GlobalRedux/store";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["", "Успеваемость"],
  datasets: [
    {
      data: [100, 10],
      backgroundColor: ["#eee", "green"],
      borderColor: ["#eee", "green"],
    },
  ],
};

export function ProfilePage() {
  const [userToken, setUserToken] = useState("");
  const { profile } = useAppSelector((state) => state.profile);
  const router = useRouter();
  const exitProfile = () => {
    window.localStorage.removeItem("token");
    router.replace("/auth");
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
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
              <Title text={profile?.username} />
              <Title text={profile.priority === '1' ? 'HR' : 'Сотрудник'} />
              <Title text={`Направление: ${profile.role}`} />
              <Title text={profile._id} />
              <div className={s.pie}>
                <Pie data={data} />
              </div>
              <Button onClick={exitProfile} text="сменить пользователя" />
            </Box>
          </Wrapper>
        </PageWrapper>
      )}
    </>
  );
}

export default ProfilePage;
