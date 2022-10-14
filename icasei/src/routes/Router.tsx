import { Routes, Route } from "react-router-dom";
import { LoginPage, SearchPage, SearchResultsPage } from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/watch/:id" element={<SearchResultsPage />} />
    </Routes>
  );
};
