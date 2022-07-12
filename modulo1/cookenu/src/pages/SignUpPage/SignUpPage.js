import { FormDiv, InputField, LogoImage, MainButton } from "./styled";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import { Button, CircularProgress } from "@material-ui/core";
import { goToLogin } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";
import { signup } from "../../services/user";
import { useState } from "react";
import { MainBox } from "../../constants/styled";

export const SignUpPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (ev) => {
    console.log(form);
    ev.preventDefault();
    signup(form, cleanFields, navigate, setIsLoading);
  };

  return (
    <MainBox>
      <LogoImage src={logo} />
      <form onSubmit={onSubmitForm}>
        <FormDiv>
          <InputField
            placeholder={"Nome"}
            name={"name"}
            value={form.name}
            onChange={onChange}
            required
          />
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
              <>Criar Conta</>
            )}
          </MainButton>
        </FormDiv>
      </form>
      <Button
        onClick={() => goToLogin(navigate)}
        type={"submit"}
        variant={"text"}
        color={"primary"}
      >
        Já possui uma conta? Faça o login
      </Button>
    </MainBox>
  );
};
