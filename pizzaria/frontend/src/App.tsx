import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import { Router } from "./router/Router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Grid>
    </Box>
  </ChakraProvider>
);
