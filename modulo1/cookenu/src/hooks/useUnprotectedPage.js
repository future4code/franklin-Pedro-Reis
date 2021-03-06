import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToRecipesList } from "../router/coordinator";

export const useUnprotectedPage = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToRecipesList(navigate);
    }
  }, [navigate]);
};
