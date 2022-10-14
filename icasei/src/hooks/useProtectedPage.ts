import { useLayoutEffect } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const useProtectedPage = () => {
  const { goToLogin } = useAppNavigate();

  const localStorageUser = localStorage.getItem("user");
  const localStorageEmail = localStorage.getItem("email");

  useLayoutEffect(() => {
    if (!localStorageUser?.length && !localStorageEmail?.length) {
      goToLogin();
    }
  }, [goToLogin, localStorageUser, localStorageEmail]);
};
