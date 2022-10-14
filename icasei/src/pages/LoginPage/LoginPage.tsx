import { Box, Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { LoginContext } from "../../context/Login";
import { useForm, useUnprotectedPage } from "../../hooks";

export const LoginPage = () => {
  useUnprotectedPage();

  const { login } = React.useContext(LoginContext);

  const { form, onChange } = useForm({
    user: "",
    email: "",
  });

  const toast = useToast();

  return (
    <Box padding="20px">
      <Box margin="10px">
        <FormLabel>Nome do usuário</FormLabel>
        <Input
          id="user"
          name="user"
          value={form.user}
          type="text"
          onChange={onChange}
          placeholder="Nome do usuário"
        />
      </Box>
      <Box margin="10px">
        <FormLabel>E-mail</FormLabel>
        <Input
          id="email"
          name="email"
          value={form.email}
          type="email"
          onChange={onChange}
          placeholder="E-mail"
        />
      </Box>
      <Box margin="20px">
        <Button
          onClick={() => {
            toast({
              title: "Login realizado.",
              description: `Bem vindo, ${form.user}.`,
              status: "success",
              duration: 9000,
              isClosable: true,
            }) && login(form);
          }}
          size="md"
        >
          Entrar
        </Button>
      </Box>
    </Box>
  );
};
