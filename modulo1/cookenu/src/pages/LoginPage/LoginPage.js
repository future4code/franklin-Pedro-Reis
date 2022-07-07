import { FormDiv, InputField, LogoImage, MainButton } from "./styled";
import logo from "../../assets/logo.png";
import { useForm } from "../../hooks/useForm";
import { Button } from "@material-ui/core";
import { goToSignUp } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const LoginPage = ({ setRightButtonText }) => {
  useUnprotectedPage();
  const navigate = useNavigate();
  const { form, onChange, cleanFields } = useForm({ email: "", password: "" });

  const onSubmitForm = (ev) => {
    ev.preventDefault();
    login(form, cleanFields, navigate, setRightButtonText);
  };

  return (
    <div>
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
          <MainButton>FAZER LOGIN</MainButton>{" "}
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
    </div>
  );
};
