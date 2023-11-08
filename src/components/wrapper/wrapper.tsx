import { FC } from "react";
import s from "./wrapper.module.css";
import { Menu } from "../menu/menu";

interface IProps {
  children: React.ReactNode;
}

export const Wrapper: FC<IProps> = ({ children }) => {
  return (
    <div className={s.flex}>
      <Menu />
      <div className={s.wrapper}>
        {children}
        </div>
    </div>
  );
};
