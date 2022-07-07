import { Add } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { RecipeCard } from "../../components/RecipeCard/RecipeCard";
import { baseUrl } from "../../constants/baseUrl";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { goToAddRecipes, goToRecipeDetails } from "../../router/coordinator";
import { AddRecipeButton, RecipesGrid } from "./styled";

export const RecipesListPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const recipes = useRequestData([], `${baseUrl}/recipe/feed`);

  const onClickCard = (id) => {
    goToRecipeDetails(navigate, id);
  };

  return (
    <div>
      <RecipesGrid>
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              key={recipe.recipe_id}
              src={recipe.image}
              text={recipe.title}
              onClick={() => onClickCard(recipe.recipe_id)}
            />
          );
        })}
      </RecipesGrid>
      <AddRecipeButton
        color={"primary"}
        onClick={() => {
          goToAddRecipes(navigate);
        }}
      >
        <Add />
      </AddRecipeButton>
    </div>
  );
};
