import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { Header } from "./components";
import { LoginProvider } from "./context/Login";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <BrowserRouter>
        <LoginProvider>
          <Box
            textAlign="center"
            fontSize="xl"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
          >
            <Header />
            <Router />
          </Box>
        </LoginProvider>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
);
