import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { ColorModeSwitcher } from "./components";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Text>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
