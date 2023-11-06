"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { FC, ReactNode } from "react";

interface MyProps {
  children?: ReactNode;
}

const Providers: FC<MyProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
