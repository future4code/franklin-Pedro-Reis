import { Routes, Route } from "react-router-dom";
import { AdminHome, Error, Login, SignUp } from "../pages";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="criar-conta" element={<SignUp />} />
        <Route path="admin" element={<AdminHome />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
};
