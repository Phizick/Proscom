import { FC } from "react";
import s from "./pade-wrapper.module.css";

interface IProps {
  children: React.ReactNode;
}

export const PageWrapper: FC<IProps> = ({ children }) => {
  return <div className={s.page}>{children}</div>;
};
