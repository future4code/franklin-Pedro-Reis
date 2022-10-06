import { Button, ButtonDiv, InputDiv, RowAlignDiv } from "../../components";
import { InputField } from "../../components/Input/InputField";
import { useForm } from "../../hooks/useForm";
import { useAppNavigate } from "../../router/coordinator";
import { login } from "../../services/login";

export const Login = () => {
  const { goToUserHome, goToAdminHome } = useAppNavigate();
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    login(form);
    cleanFields();
  };

  const goToUserRoleHomePage = async () => {
    const response = await login(form);
    if (response?.data.user.role === "admin") {
      goToAdminHome();
    } else {
      goToUserHome();
    }
  };

  return (
    <RowAlignDiv>
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
          <Button
            type="submit"
            onClick={() => goToUserRoleHomePage()}
            color="white"
            text="Login"
          />
        </ButtonDiv>
      </form>
    </RowAlignDiv>
  );
};
