import { FC } from "react";
import s from "./label.module.css";

interface IProps {
  text: string;
  inputId: string;
}

export const Label: FC<IProps> = ({ text, inputId }) => {
  return (
    <label className={s.label} htmlFor={inputId}>
      {text}
    </label>
  );
};
