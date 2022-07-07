import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddRecipesPage } from "../pages/AddRecipesPage/AddRecipesPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RecipeDetailPage } from "../pages/RecipeDetailPage/RecipeDetailPage";
import { RecipesListPage } from "../pages/RecipesListPage/RecipesListPage";
import { SignUpPage } from "../pages/SignUpPage";
import { Header } from "../components/Header/Header";
import { primaryColor } from "../constants/colors";
import { MainBox } from "../constants/styled";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header color={primaryColor} />
      <MainBox>
        <Routes>
          <Route index element={<RecipesListPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="criar-conta" element={<SignUpPage />} />
          <Route path="receita/:recipeId" element={<RecipeDetailPage />} />
          <Route path="criar-receita" element={<AddRecipesPage />} />
        </Routes>
      </MainBox>
    </BrowserRouter>
  );
};
