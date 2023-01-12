import { Navigate, Route, Routes } from "react-router-dom";
import { LoginRigisterProvider } from "../contexts/contexLoginRegister";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Forum from "../pages/Forum";
import Admin from "../pages/Admin/AdmPage";
import { ForumProvider } from "../contexts/ContextForum/contextForum";
import { AuthProvider } from "../contexts/ContextAuth/contextAuth";
import { DashboardProvider } from "../contexts/contextDashboard";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route element={ <DashboardProvider /> }>
        <Route element={<LoginRigisterProvider />}>
          <Route element={<AuthProvider/>}>
            <Route element={<ForumProvider />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Route>
        </Route>
      </Route>  
    </Routes>

  );
};
