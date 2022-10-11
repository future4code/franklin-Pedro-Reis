import React, { useLayoutEffect } from "react";
import { LoginContext } from "../context/Login";

export const useProtectedPage = () => {
  const { logout, loggedUser } = React.useContext(LoginContext);

  useLayoutEffect(() => {
    if (loggedUser === undefined) {
      logout();
    }
  }, [loggedUser, logout]);
};
