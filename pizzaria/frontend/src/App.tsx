import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Router } from "./router/Router";
import { Header } from "./components";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
};
