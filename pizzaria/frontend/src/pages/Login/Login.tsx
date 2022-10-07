import React, { FormEvent } from "react";
import {
  Button,
  ButtonDiv,
  InputDiv,
  RowAlignDiv,
  NotLoggedDiv,
  InputField,
} from "../../components";
import { useForm } from "../../hooks/useForm";
import { useAppNavigate } from "../../router/coordinator";
import { login } from "../../services/login";

export const Login = () => {
  const { goToUserHome, goToAdminHome } = useAppNavigate();

  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
    const loginResponse = await login(form);
    if (loginResponse.user.role === "admin") {
      goToAdminHome();
    } else {
      goToUserHome();
    }
    cleanFields();
  };

  return (
    <NotLoggedDiv>
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
            <Button type="submit" color="white" text="Login" />
          </ButtonDiv>
        </form>
      </RowAlignDiv>
    </NotLoggedDiv>
  );
};
