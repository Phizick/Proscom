import { FC } from "react";
import s from "./input.module.css";
interface IProps {
  type: string;
  id: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<IProps> = ({ ...rest }) => {
  return <input className={s.input} {...rest} />;
};
