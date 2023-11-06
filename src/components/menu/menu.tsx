import Link from "next/link";
import s from "./menu.module.css";
import cn from "classnames";
import Image from "next/image";
import allImg from "../../images/all.svg";
import peplesImg from "../../images/peoples.svg";
import folderO from "../../images/folder.svg";
import musicImg from "../../images/music.svg";
export const Menu = () => {
  return (
    <menu className={s.menu}>
      <div>
        <p className={s.txt}>Онбординг</p>
        <div className={s.links}>
          <Link className={cn(s.link, s.link_active)} href="/">
            <Image className={s.img} src={allImg} alt="Общее" />
            Общее
          </Link>
          <Link className={cn(s.link)} href="/peoples">
            <Image className={s.img} src={peplesImg} alt="Мои сотрудники" />
            Мои сотрудники
          </Link>
          <Link className={cn(s.link)} href="/courses">
            <Image className={s.img} src={folderO} alt="Наши курсы" />
            Наши курсы
          </Link>
        </div>
      </div>
      <Link className={cn(s.link)} href="/support">
        <Image className={s.img} src={musicImg} alt="Поддержка" />
        Поддержка
      </Link>
    </menu>
  );
};
