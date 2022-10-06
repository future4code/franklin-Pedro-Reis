import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import { useRequestData } from "../hooks/useRequestData";
import { useAppNavigate } from "../router/coordinator";

export const AuthContext = React.createContext("");

export const AuthContextProvider = () => {
  const [loggedUser, setLoggedUser] = useState();

  //   const login = (credentials: CredentialProps) => {
  //     let logged = false;
  //     if (
  //       users.filter(
  //         (user: UserProps) =>
  //           user.email === credentials.email &&
  //           user.password === credentials.password
  //       ).length > 0
  //     ) {
  //       logged = true;
  //     }
  //     if (logged === true) {
  //       const loggedUser = users.find((user) => user.email === credentials.email);
  //       const userId = loggedUser.id;
  //       localStorage.setItem("token", `${credentials.email}`);
  //       localStorage.setItem("userId", `${userId}`);
  //       alert("logado");
  //       setLoggedUser(JSON.parse(localStorage.getItem("userId")));
  //       goToTasks();
  //     } else {
  //       alert("revise seus dados ou crie uma conta");
  //     }
  //   };
  //   return (
  //     <AuthContext.Provider value={{ loggedUser, login }}>
  //       {props.children}
  //     </AuthContext.Provider>
  //   );
};
