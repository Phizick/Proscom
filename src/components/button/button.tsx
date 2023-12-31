import { FC, SyntheticEvent } from "react";
import s from "./button.module.css";
import cn from "classnames";
interface IProps {
  text: string;
  classname?: string;
  disabled?: boolean;
  onClick?: (e: SyntheticEvent) => void;
}

export const Button: FC<IProps> = ({ text, classname, ...rest }) => {
  return (
    <button className={cn(s.button, classname)} {...rest}>
      {text}
    </button>
  );
};
