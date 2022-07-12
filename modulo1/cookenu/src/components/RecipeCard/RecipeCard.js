import { RecipeCardBox, RecipeCardImage, RecipeCardTextBox } from "./styled";

export const RecipeCard = ({ src, text, onClick }) => {
  return (
    <RecipeCardBox onClick={onClick}>
      <RecipeCardImage src={src} />
      <RecipeCardTextBox>
        <p>{text}</p>
      </RecipeCardTextBox>
    </RecipeCardBox>
  );
};
