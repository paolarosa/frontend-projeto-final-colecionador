import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRigisterProvider } from "../contexts/contexLoginRegister";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Forum from "../pages/Forum"

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route element={<LoginRigisterProvider />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forum" element={<Forum />} />
      </Route>
    </Routes>
  );
};
