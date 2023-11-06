import { FC } from "react";
import s from "./title.module.css";

interface IProps {
  text: string;
}

export const Title: FC<IProps> = ({ text }) => {
  return <h2 className={s.title}>{text}</h2>;
};
