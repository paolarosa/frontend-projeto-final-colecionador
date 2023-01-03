import { Route, Routes } from "react-router-dom";
import { LoginRigisterProvider } from "../contexts/contexLoginRegister";
import Login from "../pages/Login";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route element={<LoginRigisterProvider />}>
        <Route path="/login" element={<Login />} />
        
      </Route>
    </Routes>
  );
};
