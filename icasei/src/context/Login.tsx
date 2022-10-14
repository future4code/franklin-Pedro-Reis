import { useToast } from "@chakra-ui/react";
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
  const toast = useToast();

  const validEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
  console.log();

  const login = (form: LoginProps) => {
    if (validEmail.test(form.email)) {
      localStorage.setItem("user", form.user);
      localStorage.setItem("email", form.email);
      setLoggedUser(form);
      goToSearch();
    } else {
      toast({
        title: "E-mail inválido.",
        description: `Por favor, insira um e-mail válido.`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
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
