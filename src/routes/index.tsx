import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRigisterProvider } from "../contexts/contexLoginRegister";
import Login from "../pages/Login";
import Home from "../pages/Home"
import Profile from "../pages/Profile";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<LoginRigisterProvider />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};
