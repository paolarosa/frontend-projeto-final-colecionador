import { createContext, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { apiBase } from "../services/api";

interface iUserContext {
  loading: boolean;
  passwordEye: false | true;
  setPasswordEye: (showPassword: boolean) => void;
  loginRequisition: (data: iUserLoginProps) => Promise<void>;
  registerRequisition: (data: iUserRegisterProps) => Promise<void>;
}

interface iUserRegisterProps {
  name: string;
  email: string;
  password: string;
}

interface iUserLoginProps {
  email: string;
  password: string;
}

export const LoginRegisterContext = createContext({} as iUserContext);

export const LoginRigisterProvider = () => {
  const [passwordEye, setPasswordEye] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const loginRequisition = async (data: iUserLoginProps) => {
    console.log(data);

    try {
      setLoading(true);
      const response = await apiBase.post("login", data);

      localStorage.setItem("Token", response.data.accessToken);

      console.log(response);

      const toNavigate = location.state?.from?.pathname || "/dashboard";

      setTimeout(() => {
        navigate(toNavigate, { replace: true });
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const registerRequisition = async (data: iUserRegisterProps) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await apiBase.post("register", data);
      console.log(response);

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginRegisterContext.Provider
      value={{
        loginRequisition,
        passwordEye,
        setPasswordEye,
        registerRequisition,
        loading,
      }}
    >
      <Outlet />
    </LoginRegisterContext.Provider>
  );
};
