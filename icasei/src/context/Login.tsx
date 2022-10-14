import React, { PropsWithChildren, useState } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const LoginContext = React.createContext<any>(undefined);

interface LoginProps {
  user: string;
  email: string;
}

export const LoginProvider = ({ children }: PropsWithChildren) => {
  const [loggedUser, setLoggedUser] = useState<LoginProps>();

  const { goToSearch, goToLogin } = useAppNavigate();

  const login = (form: LoginProps) => {
    localStorage.setItem("user", form.user);
    localStorage.setItem("email", form.email);
    setLoggedUser(form);
    goToSearch();
  };

  const logout = () => {
    setLoggedUser(undefined);
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    goToLogin();
  };

  return (
    <LoginContext.Provider value={{ setLoggedUser, loggedUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
