import { useProtectedPage } from "../../hooks/useProtectedPage";

export const RecipesListPage = () => {
  useProtectedPage();
  return <div>RecipesListPage</div>;
};
