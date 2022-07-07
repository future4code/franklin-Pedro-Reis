import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolBar } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToRecipesList } from "../../router/coordinator";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToRecipesList(navigate)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={() => goToLogin(navigate)} color="inherit">
          Login
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};
