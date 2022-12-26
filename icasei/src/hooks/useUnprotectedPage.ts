import React, { useLayoutEffect } from "react";
import { LoginContext } from "../context/Login";

import { useAppNavigate } from "../routes/coordinator";

export const useUnprotectedPage = () => {
  const { goToSearch } = useAppNavigate();
  const { login } = React.useContext(LoginContext);

  const localStorageUser = localStorage.getItem("user");
  const localStorageEmail = localStorage.getItem("email");

  useLayoutEffect(() => {
    if (localStorageUser?.length && localStorageEmail?.length) {
      login({ user: localStorageUser, email: localStorageEmail });
    }
  }, [localStorageUser, localStorageEmail, goToSearch, login]);
};
