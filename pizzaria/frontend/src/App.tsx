import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Router } from "./router/Router";
import { MainDiv } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <MainDiv>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MainDiv>
  </ChakraProvider>
);
