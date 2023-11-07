'use client'
import Link from "next/link";
import s from "./menu.module.css";
import cn from "classnames";
import Image from "next/image";
import allImg from "../../images/all.svg";
import peplesImg from "../../images/peoples.svg";
import folderO from "../../images/folder.svg";
import bookImg from "../../images/book.svg";
import musicImg from "../../images/music.svg";
import { usePathname } from "next/navigation";
export const Menu = () => {
  const pathname = usePathname().split('/')[1]
  return (
    <menu className={s.menu}>
      <div>
        <p className={s.txt}>Онбординг</p>
        <div className={s.links}>
          <Link className={cn(s.link, pathname === 'education' ? s.link_active : '')} href="/education">
            <Image className={s.img} src={bookImg} alt="Обучение" />
            Обучение
            <p className={s.notif}>{1}</p>
          </Link>
          {/* <Link className={cn(s.link, pathname === '' ? s.link_active : '')} href="/">
            <Image className={s.img} src={allImg} alt="Общее" />
            Общее
          </Link>
          <Link className={cn(s.link, pathname === 'peoples' ? s.link_active : '')} href="/peoples">
            <Image className={s.img} src={peplesImg} alt="Мои сотрудники" />
            Мои сотрудники
          </Link>
          <Link className={cn(s.link,  pathname === 'courses' ? s.link_active : '')} href="/courses">
            <Image className={s.img} src={folderO} alt="Наши курсы" />
            Наши курсы
          </Link> */}
        </div>
      </div>
      <Link className={cn(s.link,  pathname === 'support' ? s.link_active : '')} href="/support">
        <Image className={s.img} src={musicImg} alt="Поддержка" />
        Поддержка
      </Link>
    </menu>
  );
};
