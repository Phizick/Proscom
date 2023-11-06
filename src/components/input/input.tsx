import { FC } from "react";
import s from "./input.module.css";
interface IProps {
  type: string;
  id: string;
  placeholder: string;
}

export const Input: FC<IProps> = ({ ...rest }) => {
  return <input className={s.input} {...rest} />;
};
