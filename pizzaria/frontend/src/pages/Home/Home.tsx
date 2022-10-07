import { Button, RowAlignDiv, ButtonDiv, NotLoggedDiv } from "../../components";
import { useAppNavigate } from "../../router/coordinator";

export const Home = () => {
  const { goToLogin, goToSignUp } = useAppNavigate();

  return (
    <NotLoggedDiv>
      <RowAlignDiv>
        Bem vindo
        <ButtonDiv>
          <Button
            type="button"
            onClick={goToLogin}
            color="white"
            text="Login"
          />
          <Button
            type="button"
            onClick={goToSignUp}
            color="rgba(86, 0, 0, 1)"
            text="Criar Conta"
          />
        </ButtonDiv>
      </RowAlignDiv>
    </NotLoggedDiv>
  );
};
