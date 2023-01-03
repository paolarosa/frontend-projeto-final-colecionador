import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import { apiBase } from "../services/api";

export const LoginRegisterContext = createContext({});

export const LoginRigisterProvider = () => {

    const loginRequisition = async (data: any) => {
        console.log(data);
    
        try {
          const response = await apiBase.post("login", data);
          localStorage.setItem("Token", response.data.accessToken);
          console.log(response)
        } catch (error) {
          console.log(error);
        }
      };




  return (
    <LoginRegisterContext.Provider value={{loginRequisition,}}>
      <Outlet />
    </LoginRegisterContext.Provider>
  );
};
