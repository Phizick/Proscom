import { FC } from "react";
import s from "./description.module.css";
interface IProps {
  text: string;
}

export const Description: FC<IProps> = ({ text }) => {
  return <p className={s.description}>{text}</p>;
};
