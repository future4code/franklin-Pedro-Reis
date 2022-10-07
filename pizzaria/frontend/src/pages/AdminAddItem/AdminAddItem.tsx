import { Center } from "@chakra-ui/react";
import { FormEvent } from "react";
import {
  LoggedDiv,
  RowAlignDiv,
  ButtonDiv,
  Button,
  InputDiv,
  InputField,
  PriceInput,
} from "../../components";
import { Title } from "../../components/Title/Title";
import { useForm } from "../../hooks/useForm";

export const AdminAddItem = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    description: "",
    broto: "",
    media: "",
    familia: "",
    supergg: "",
  });

  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
    cleanFields();
  };

  return (
    <LoggedDiv>
      <RowAlignDiv>
        <Title text={"ADICIONE PIZZAS AO CATÁLOGO"} />
        <Center>
          <form onSubmit={onSubmitForm}>
            <InputDiv>
              <InputField
                label="Nome"
                placeholder="Ex. Calabresa especial"
                id="name"
                name="name"
                value={form.name}
                type="text"
                onChange={onChange}
              />
              <InputField
                label="Descrição"
                placeholder="Ex. Muzzarela, molho de tomate, etc."
                id="description"
                name="description"
                value={form.description}
                onChange={onChange}
                type="text"
              />
              <PriceInput
                label="BROTO"
                placeholder="R$"
                id="broto"
                name="broto"
                value={form.broto}
                onChange={onChange}
                type="text"
              />
              <PriceInput
                label="MÉDIA"
                placeholder="R$"
                id="media"
                name="media"
                value={form.media}
                onChange={onChange}
                type="text"
              />
              <PriceInput
                label="FAMILIA"
                placeholder="R$"
                id="familia"
                name="familia"
                value={form.familia}
                onChange={onChange}
                type="text"
              />
              <PriceInput
                label="SUPER GG"
                placeholder="R$"
                id="supergg"
                name="supergg"
                value={form.supergg}
                onChange={onChange}
                type="text"
              />
            </InputDiv>
          </form>
        </Center>
        <Center>
          <ButtonDiv>
            <Button
              type="submit"
              color="rgba(86, 0, 0, 1)"
              text="Ver pedidos"
            />
            <Button
              type="submit"
              color="rgba(86, 0, 0, 1)"
              text="Adicionar pizzas"
            />
          </ButtonDiv>
        </Center>
      </RowAlignDiv>
    </LoggedDiv>
  );
};
