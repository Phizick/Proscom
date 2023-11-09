"use client";
import { Box } from "@/components/box/box";
import { Header } from "@/components/header/header";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
import { Text } from "@/components/text/text";
import { Title } from "@/components/title/title";
import { Wrapper } from "@/components/wrapper/wrapper";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import s from "./page.module.css";
import { Button } from "@/components/button/button";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <PageWrapper>
      <Header />
      <Wrapper>
        <Box>
          <Title text="Хирьянов Никита Сергеевич" />
          <Text text="" />
          <Text text="Возраст 22 года" />
          <Text text="Пол мужской" />
          <Text text="Направление Фронтенд" />
          <div className={s.pie}>
            <Pie data={data} />
          </div>
          <Button
            onClick={() => router.replace("/auth")}
            text="сменить пользователя"
          />
        </Box>
      </Wrapper>
    </PageWrapper>
  );
}

export default ProfilePage;
