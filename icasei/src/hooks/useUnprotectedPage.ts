import React, { useLayoutEffect } from "react";
import { LoginContext } from "../context/Login";

export const useUnprotectedPage = () => {
  const { loggedUser, login } = React.useContext(LoginContext);

  useLayoutEffect(() => {
    if (loggedUser !== undefined) {
      login(loggedUser);
    }
  }, [login, loggedUser]);
};
