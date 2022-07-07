import { FormDiv, InputField, LogoImage, MainButton } from "./styled";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { goToLogin } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const SignUpPage = () => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange, clear } = useForm({
    nome: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (ev) => {
    console.log(form);
    ev.preventDefault();
  };

  return (
    <div>
      <LogoImage src={logo} />
      <form onSubmit={onSubmitForm}>
        <FormDiv>
          <InputField
            placeholder={"Nome"}
            name={"nome"}
            value={form.nome}
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
          <MainButton>FAZER LOGIN</MainButton>{" "}
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
    </div>
  );
};
