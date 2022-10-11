import { useLayoutEffect } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const useProtectedPage = () => {
  const { goToLogin } = useAppNavigate();
  const token = localStorage.getItem("logado");

  useLayoutEffect(() => {
    if (!token) {
      goToLogin();
    }
  }, [goToLogin, token]);
};
