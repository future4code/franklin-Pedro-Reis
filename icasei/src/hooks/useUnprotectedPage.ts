import { useLayoutEffect } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const useUnprotectedPage = () => {
  const { goToSearch } = useAppNavigate();

  useLayoutEffect(() => {
    const token = localStorage.getItem("logado");
    if (token) {
      goToSearch();
    }
  });
};
