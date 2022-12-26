import React, { useState } from "react";
import { UserContextType } from "../types/userType";

export const LoggedUserContext = React.createContext<any>(undefined);

export const LoggedUserContextProvider = ({ children }: any) => {
  //ainda precisar carregar os dados do user do pedido
  const [loggedUser, setLoggedUser] = useState<UserContextType>();
  console.log(loggedUser);

  return (
    <LoggedUserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </LoggedUserContext.Provider>
  );
};
