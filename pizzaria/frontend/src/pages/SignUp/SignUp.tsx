import {
  Button,
  ButtonDiv,
  InputDiv,
  RowAlignDiv,
  VerticalAlignDiv,
} from "../../components";
import { InputField } from "../../components/Input/InputField";

export const SignUp = () => {
  return (
    <RowAlignDiv>
      <InputDiv>
        <InputField
          label="Nome"
          placeholder="nome"
          id="name"
          name="name"
          value="name"
          type="text"
        />
        <InputField
          label="E-mail"
          placeholder="nome@email.com"
          id="email"
          name="email"
          value="email"
          type="email"
        />
        <InputField
          label="WhatsApp"
          placeholder="(xx) xxxxx-xxxx"
          id="whatsapp"
          name="whatsapp"
          value="whatsapp"
          type="tel"
        />
        <InputField
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          id="password"
          name="password"
          value="password"
          type="password"
        />
        <VerticalAlignDiv>
          <InputField
            label="CEP"
            placeholder="xxxxx-xxx"
            id="CEP"
            name="CEP"
            value="CEP"
            type=""
          />
          <InputField
            label="Número"
            placeholder="xx"
            id="number"
            name="number"
            value="number"
            type="number"
          />
        </VerticalAlignDiv>
        <InputField
          label="Endereço"
          placeholder="Rua x"
          id="address"
          name="address"
          value="address"
          type=""
        />
        <InputField
          label="Complemento"
          placeholder="Apartamento, bloco, casa, etc"
          id="complement"
          name="complement"
          value="complement"
          type=""
        />
        <InputField
          label="Bairro"
          placeholder="Bairro"
          id="district"
          name="district"
          value="district"
          type=""
        />
        <InputField
          label="Referência"
          placeholder="Perto do mercadinho"
          id="reference"
          name="reference"
          value="reference"
          type=""
        />
      </InputDiv>
      <ButtonDiv>
        <Button
          onClick={() => alert("clicou")}
          color="rgba(86, 0, 0, 1)"
          text="Criar conta"
        />
      </ButtonDiv>
    </RowAlignDiv>
  );
};
