import { FC } from "react";
import s from "./text.module.css";

interface IProps {
  text: string;
}

export const Text: FC<IProps> = ({ text }) => {
  return <p className={s.title_course}>{text}</p>;
};
