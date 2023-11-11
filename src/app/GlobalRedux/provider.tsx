"use client";

import { Provider } from "react-redux";
import { FC, ReactNode } from "react";
import store from "./store";

interface MyProps {
  children?: ReactNode;
}

const Providers: FC<MyProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
