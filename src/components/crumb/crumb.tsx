"use client";
import Link from "next/link";
import { FC } from "react";
import s from "./crumb.module.css";
import arrowImg from "../../images/arrow.svg";
import Image from "next/image";
import cn from "classnames";
interface IProps {
  text: string;
  linkText: string;
  activeLink: boolean;
}

export const Crumb: FC<IProps> = ({ text, linkText, activeLink }) => {
  return (
    <Link className={cn(s.link, activeLink && s.link_active)} href={linkText}>
      {text}
      {activeLink === false && (
        <Image className={s.img} src={arrowImg} alt="arrow" />
      )}
    </Link>
  );
};
