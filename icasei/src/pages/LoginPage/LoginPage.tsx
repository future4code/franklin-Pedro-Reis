import { Box, Button, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useForm, useUnprotectedPage } from "../../hooks";
import { useAppNavigate } from "../../routes/coordinator";

export const LoginPage = () => {
  useUnprotectedPage();

  const { form, onChange } = useForm({
    user: "",
    email: "",
  });

  const { goToSearch } = useAppNavigate();

  const toast = useToast();

  const login = () => {
    localStorage.setItem("logado", form.email);
    toast({
      title: "Login realizado.",
      description: `Bem vindo, ${form.user}.`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    goToSearch();
  };

  return (
    <Box display="flex" flexDir="column" justifyContent="space-around">
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
        <Button onClick={login} size="md">
          Entrar
        </Button>
      </Box>
    </Box>
  );
};
