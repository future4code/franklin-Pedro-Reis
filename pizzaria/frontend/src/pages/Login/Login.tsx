import { Button, ButtonDiv, InputDiv, RowAlignDiv } from "../../components";
import { InputField } from "../../components/Input/InputField";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const { form, onChange, cleanFields } = useForm({
    email: "",
    password: "",
  });

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(form);
    cleanFields();
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
            onClick={() => alert(`${form.email} ${form.password}`)}
            color="white"
            text="Login"
          />
        </ButtonDiv>
      </form>
    </RowAlignDiv>
  );
};
