import { Button, InputDiv, RowAlignDiv } from "../../components";
import { InputField } from "../../components/Input/InputField";

export const Login = () => {
  return (
    <RowAlignDiv>
      <InputDiv>
        <InputField
          label="E-mail"
          placeholder="nome@email.com"
          id="email"
          name="email"
          value="email"
          type="email"
        />
        <InputField
          label="Senha"
          placeholder="******"
          id="password"
          name="password"
          value="password"
          type="password"
        />
      </InputDiv>
      <Button onClick={() => alert("clicou")} color="white" text="Login" />
    </RowAlignDiv>
  );
};
