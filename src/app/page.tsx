import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import { PageWrapper } from "@/components/page-wrapper/page-wrapper";
export default function Home() {
  return (
    <PageWrapper>
      <Header />
      <Menu />
    </PageWrapper>
  );
}
