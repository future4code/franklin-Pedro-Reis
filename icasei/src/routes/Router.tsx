import { Routes, Route } from "react-router-dom";
import { LoginPage, SearchPage, VideoDetailsPage } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/watch/:id" element={<VideoDetailsPage />} />
    </Routes>
  );
};
