import { useNavigate } from "react-router-dom";
import { goToRecipeDetails } from "../../router/coordinator";
import { RecipeCardBox, RecipeCardImage, RecipeCardTextBox } from "./styled";

export const RecipeCard = ({ src, text, id }) => {
  const navigate = useNavigate;

  return (
    <RecipeCardBox onClick={() => goToRecipeDetails(navigate)}>
      <RecipeCardImage src={src} />
      <RecipeCardTextBox>
        <p>{text}</p>
      </RecipeCardTextBox>
    </RecipeCardBox>
  );
};
