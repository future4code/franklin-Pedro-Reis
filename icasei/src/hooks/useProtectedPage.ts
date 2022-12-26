import React, { useEffect, useLayoutEffect } from "react";
import { LoginContext } from "../context/Login";
import { useAppNavigate } from "../routes/coordinator";

export const useProtectedPage = () => {
  const { goToLogin } = useAppNavigate();
  const { setLoggedUser } = React.useContext(LoginContext);

  const localStorageUser = localStorage.getItem("user");
  const localStorageEmail = localStorage.getItem("email");

  useEffect(() => {
    if (localStorage.getItem("user")?.length) {
      setLoggedUser({
        user: localStorageUser,
        email: localStorageEmail,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!localStorageUser?.length && !localStorageEmail?.length) {
      goToLogin();
    }
  }, [goToLogin, localStorageUser, localStorageEmail]);
};
