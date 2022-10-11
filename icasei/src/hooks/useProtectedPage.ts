import { useLayoutEffect } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const useProtectedPage = () => {
  const { goToLogin } = useAppNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("logado");
    if (!token) {
      goToLogin();
    }
  });
};
