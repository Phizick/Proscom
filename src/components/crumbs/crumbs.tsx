import { FC } from "react";
import s from "./crumbs.module.css";

interface IProps {
  children: React.ReactNode;
}

export const Crumbs: FC<IProps> = ({ children }) => {
  return <div className={s.crumbs}>{children}</div>;
};
