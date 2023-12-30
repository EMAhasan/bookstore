"use client";
import { store } from "@/app/store";
import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;