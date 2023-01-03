import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export const RoutesMain: any = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
