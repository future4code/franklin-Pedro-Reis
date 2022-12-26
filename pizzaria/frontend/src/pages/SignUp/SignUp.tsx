import { FormEvent } from "react";
import { Button, ButtonDiv, InputDiv } from "../../components";
import { InputField } from "../../components/InputField/InputField";
import { useForm } from "../../hooks/useForm";
import { useAppNavigate } from "../../router/coordinator";
import { signup } from "../../services/signup";
import { CepAndNumberDiv, SignUpDiv } from "./styled";

export const SignUp = () => {
  const { goToUserHome } = useAppNavigate();

  const { form, onChange, cleanFields } = useForm({
    name: "",
    email: "",
    whatsapp: "",
    password: "",
    cep: "",
    number: "",
    street: "",
    district: "",
    reference: "",
  });

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    signup(form);
    cleanFields();
  };

  return (
    <SignUpDiv>
      <form onSubmit={onSubmitForm}>
        <InputDiv>
          <InputField
            label="Nome"
            placeholder="nome"
            id="name"
            name="name"
            value={form.name}
            type="text"
            onChange={onChange}
          />
          <InputField
            label="E-mail"
            placeholder="nome@email.com"
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            type="email"
          />
          <InputField
            label="WhatsApp"
            placeholder="(xx) xxxxx-xxxx"
            id="whatsapp"
            name="whatsapp"
            value={form.whatsapp}
            onChange={onChange}
            type="tel"
          />
          <InputField
            label="Senha"
            placeholder="No mínimo 6 caracteres"
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            type="password"
          />
          <CepAndNumberDiv>
            <InputField
              label="CEP"
              placeholder="xxxxx-xxx"
              id="cep"
              name="cep"
              value={form.cep}
              onChange={onChange}
              type=""
            />
            <InputField
              label="Número"
              placeholder="xx"
              id="number"
              name="number"
              value={form.number}
              onChange={onChange}
              type="number"
            />
          </CepAndNumberDiv>
          <InputField
            label="Endereço"
            placeholder="Rua x"
            id="street"
            name="street"
            value={form.street}
            onChange={onChange}
            type=""
          />
          <InputField
            label="Bairro"
            placeholder="Bairro"
            id="district"
            name="district"
            value={form.district}
            onChange={onChange}
            type=""
          />
          <InputField
            label="Referência"
            placeholder="Perto do mercadinho"
            id="reference"
            name="reference"
            value={form.reference}
            onChange={onChange}
            type=""
          />
        </InputDiv>
        <ButtonDiv>
          <Button
            type="submit"
            onClick={() => goToUserHome()}
            color="rgba(86, 0, 0, 1)"
            text="Criar conta"
          />
        </ButtonDiv>
      </form>
    </SignUpDiv>
  );
};
