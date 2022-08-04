import React from "react";
import Login from "./login";
import User from "./user";

const Main = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  return isLogin ? <User /> : <Login setIsLogin={setIsLogin} />;
};

export default Main;
