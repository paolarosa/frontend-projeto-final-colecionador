import { createContext, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginRegisterContext } from "../contexLoginRegister";
import { iAuth } from "./authInterface";

export const authContext = createContext({} as iAuth);

export const AuthProvider = () => {
  const navigate = useNavigate();
  const { user } = useContext(LoginRegisterContext);

  const admCheck = () => {
    if (!user?.admin) {
      navigate("/dashboard");
    } else {
      console.log("oi");
    }
  };

  return (
    <authContext.Provider value={{ admCheck }}>
      <Outlet />
    </authContext.Provider>
  );
};
