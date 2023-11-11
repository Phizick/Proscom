import { FC } from "react";
import s from "./box.module.css";

interface IProps {
  children: React.ReactNode;
}

export const Box: FC<IProps> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};
