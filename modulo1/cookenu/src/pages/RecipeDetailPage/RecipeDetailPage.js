import { Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../constants/baseUrl";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { Loading } from "../../components/Loading/Loading";
import {
  RecipeDetailBox,
  RecipeDetailDescription,
  RecipeDetailTitleBox,
  RecipeImage,
} from "./styled";
import { MainBox } from "../../constants/styled";

export const RecipeDetailPage = () => {
  useProtectedPage();
  const params = useParams();
  const recipe = useRequestData([], `${baseUrl}/recipe/${params.id}`)[0];

  return (
    <RecipeDetailBox>
      <MainBox>
        {recipe ? (
          <div>
            <RecipeImage src={recipe?.image} />
            <RecipeDetailTitleBox>
              <Typography
                gutterBottom
                align={"center"}
                variant={"h4"}
                color={"primary"}
              >
                {recipe?.title}
              </Typography>
            </RecipeDetailTitleBox>
            <RecipeDetailDescription>
              <p>{recipe?.description}</p>
            </RecipeDetailDescription>
          </div>
        ) : (
          <div>
            <Loading />
          </div>
        )}
      </MainBox>
    </RecipeDetailBox>
  );
};
