import { useProtectedPage } from "../../hooks/useProtectedPage";

export const RecipeDetailPage = () => {
  useProtectedPage();
  return <div>RecipeDetailPage</div>;
};
