import { Routes, Route } from "react-router-dom";
import { AddRecipesPage } from "../pages/AddRecipesPage/AddRecipesPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { RecipeDetailPage } from "../pages/RecipeDetailPage/RecipeDetailPage";
import { RecipesListPage } from "../pages/RecipesListPage/RecipesListPage";
import { ErrorPage } from "../pages/ErroPage/ErrorPage";
import { SignUpPage } from "../pages/SignUpPage";
import { MainBox } from "../constants/styled";

export const Router = ({ setRightButtonText }) => {
  return (
    <div>
      <Routes>
        <Route index element={<RecipesListPage />} />
      </Routes>
      <MainBox>
        <Routes>
          <Route
            path="login"
            element={<LoginPage setRightButtonText={setRightButtonText} />}
          />
          <Route path="criar-conta" element={<SignUpPage />} />
          <Route path="receita/:id" element={<RecipeDetailPage />} />
          <Route path="criar-receita" element={<AddRecipesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainBox>
    </div>
  );
};
