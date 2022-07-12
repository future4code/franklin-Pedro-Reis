import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { StyledToolBar } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToLogin, goToRecipesList } from "../../router/coordinator";

export const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button onClick={() => goToRecipesList(navigate)} color="inherit">
          Cookenu
        </Button>
        <Button onClick={rightButtonAction} color="inherit">
          {rightButtonText}
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};
