import { createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { LoginRegisterContext } from "../contexLoginRegister";
import { iAuth } from "./authInterface";

export const authContext = createContext({} as iAuth);

export const AuthProvider = () => {
  const navigate = useNavigate();
  const { user } = useContext(LoginRegisterContext);

  const admCheck = () => {
    !user?.admin && navigate("/dashboard")
  };

  const loginCheck = () => {
    (window.localStorage.getItem("Token") && window.localStorage.getItem("@userID")) && navigate("/dashboard")
  }

  return (
    <authContext.Provider value={{ admCheck, loginCheck }}>
      <Outlet />
    </authContext.Provider>
  );
};
