import { useLayoutEffect } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const useUnprotectedPage = () => {
  const { goToSearch } = useAppNavigate();

  const token = localStorage.getItem("logado");

  useLayoutEffect(() => {
    if (token) {
      goToSearch();
    }
  }, [goToSearch, token]);
};
