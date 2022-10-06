import { Button, RowAlignDiv, ButtonDiv } from "../../components";
import { useAppNavigate } from "../../router/coordinator";

export const Home = () => {
  const { goToLogin, goToSignUp } = useAppNavigate();

  return (
    <RowAlignDiv>
      Bem vindo
      <ButtonDiv>
        <Button onClick={goToLogin} color="white" text="Login" />
        <Button
          onClick={goToSignUp}
          color="rgba(86, 0, 0, 1)"
          text="Criar Conta"
        />
      </ButtonDiv>
    </RowAlignDiv>
  );
};
