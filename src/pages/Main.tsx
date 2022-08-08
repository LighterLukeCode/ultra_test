import React from "react";
import { useAppSelector } from "../redux/hooks";
import Login from "./auth";
import User from "./user";

const Main: React.FC = () => {
  const { isLogin } = useAppSelector(state => state.authSlice);

  return isLogin ? <User /> : <Login />;
};

export default Main;
