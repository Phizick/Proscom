import { Header } from "@/components/header/header";
import { Menu } from "@/components/menu/menu";
import s from './page.module.css'
export default function Home() {
  return (
    <div className={s.page}>
      <Header />
      <Menu/>
    </div>
  );
}
