import { Box } from "@chakra-ui/react";
import { Button, ButtonDiv } from "../../components";
import { useAppNavigate } from "../../router/coordinator";

export const Home = () => {
  const { goToLogin, goToSignUp } = useAppNavigate();

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
      Bem vindo
      <ButtonDiv>
        <Button type="button" onClick={goToLogin} color="white" text="Login" />
        <Button
          type="button"
          onClick={goToSignUp}
          color="rgba(86, 0, 0, 1)"
          text="Criar Conta"
        />
      </ButtonDiv>
    </Box>
  );
};
