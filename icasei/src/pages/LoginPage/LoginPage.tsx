import { Box, Button, FormLabel, Input } from "@chakra-ui/react";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage = () => {
  useUnprotectedPage();
  return (
    <Box display="flex" flexDir="column" justifyContent="space-around">
      <Box margin="10px">
        <FormLabel>Nome do usuário</FormLabel>
        <Input placeholder="Nome do usuário" />
      </Box>
      <Box margin="10px">
        <FormLabel>E-mail</FormLabel>
        <Input placeholder="E-mail" />
      </Box>
      <Box margin="20px">
        <Button size="md">Entrar</Button>
      </Box>
    </Box>
  );
};
