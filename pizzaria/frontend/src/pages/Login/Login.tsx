import { Box } from "@chakra-ui/react";
import React, { FormEvent } from "react";
import { Button, ButtonDiv, InputDiv, InputField } from "../../components";
import { LoggedUserContext } from "../../context/LoggedUserContext";
import { useForm } from "../../hooks/useForm";
import { useAppNavigate } from "../../router/coordinator";
import { login } from "../../services/login";

export const Login = () => {
  const { goToUserHome, goToAdminHome } = useAppNavigate();
  const { setLoggedUser } = React.useContext(LoggedUserContext);

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
    const loginResponse = await login(form);
    setLoggedUser(loginResponse.user);
    if (loginResponse.user.role === "admin") {
      goToAdminHome();
    } else {
      goToUserHome();
    }
    cleanFields();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      css={`
        height: 100vh;
        background-color: rgba(144, 19, 19, 1);
      `}
    >
      <form onSubmit={onSubmitForm}>
        <InputDiv>
          <InputField
            label="E-mail"
            placeholder="nome@email.com"
            id="email"
            name="email"
            value={form.email}
            type="email"
            onChange={onChange}
          />
          <InputField
            label="Senha"
            placeholder="******"
            id="password"
            name="password"
            value={form.password}
            type="password"
            onChange={onChange}
          />
        </InputDiv>
        <ButtonDiv>
          <Button type="submit" color="white" text="Login" />
        </ButtonDiv>
      </form>
    </Box>
  );
};
