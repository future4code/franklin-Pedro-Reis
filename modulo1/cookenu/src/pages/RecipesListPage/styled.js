import { Fab } from "@material-ui/core";
import styled from "styled-components";

export const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30vh);
  grid-gap: 25px;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

export const AddRecipeButton = styled(Fab)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`;
