import { useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useAppNavigate } from "../routes/coordinator";

export const LoginContext = React.createContext<any>(undefined);

interface LoginProps {
  user: string;
  email: string;
}

export const LoginProvider = ({ children }: any) => {
  const [loggedUser, setLoggedUser] = useState<any>();

  const { goToSearch, goToLogin } = useAppNavigate();
  const toast = useToast();

  const login = (form: LoginProps) => {
    let logged = false;
    localStorage.setItem("logado", form.email);
    setLoggedUser(form);
    logged = true;
    if (logged) {
      toast({
        title: "Login realizado.",
        description: `Bem vindo, ${form.user}.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      goToSearch();
    }
  };

  const logout = () => {
    setLoggedUser(undefined);
    localStorage.removeItem("logado");
    goToLogin();
  };

  return (
    <LoginContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
