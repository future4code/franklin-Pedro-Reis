import { FormDiv, InputField, LogoImage, MainButton } from "./styled";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import { Button, CircularProgress } from "@material-ui/core";
import { goToSignUp } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { useState } from "react";
import { MainBox } from "../../constants/styled";

export const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    login(form, cleanFields, navigate, setRightButtonText, setIsLoading);
  };

  return (
    <MainBox>
      <LogoImage src={logo} />
      <form onSubmit={onSubmitForm}>
        <FormDiv>
          <InputField
            placeholder={"E-mail"}
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
            type={"email"}
          />
          <InputField
            placeholder={"Senha"}
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
            type={"password"}
          />
          <MainButton>
            {isLoading ? (
              <CircularProgress color={"inherit"} size={`24px`} />
            ) : (
              <>Fazer Login</>
            )}
          </MainButton>{" "}
        </FormDiv>
      </form>
      <Button
        onClick={() => goToSignUp(navigate)}
        type={"submit"}
        variant={"text"}
        color={"primary"}
      >
        Não possui conta? Cadastre-se
      </Button>
    </MainBox>
  );
};
