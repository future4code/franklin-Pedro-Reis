import { Box, Text } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import {
  WhiteBackGroundDiv,
  ButtonDiv,
  Button,
  InputDiv,
  InputField,
} from "../../components";
import { Title } from "../../components/Title/Title";
import { useForm } from "../../hooks/useForm";
import { useAppNavigate } from "../../router/coordinator";
import { createPizza } from "../../services/Admin/addPizza";

export const AdminAddItem = () => {
  const { goToAdminSetPrice } = useAppNavigate();
  const [addedPizza, setAddedPizza] = useState("");

  const { form, onChange, cleanFields } = useForm({
    name: "",
    description: "",
  });

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
    const createPizzaResponse = await createPizza(form);
    setAddedPizza(createPizzaResponse.id);
    cleanFields();
  };

  return (
    <WhiteBackGroundDiv>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        css={`
          margin-top: 20px;
        `}
      >
        <Title text={"ADICIONE PIZZAS AO CATÁLOGO"} />
        <Text
          fontSize="lg"
          textAlign="center"
          color="black"
          css={`
            padding: 10px;
          `}
        >
          Primeiro, insira o nome e a descrição da pizza.
        </Text>

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
          </InputDiv>
          <ButtonDiv>
            <Button
              type="submit"
              color="rgba(86, 0, 0, 1)"
              text="Adicionar pizza"
            />
            <Button
              onClick={() => goToAdminSetPrice(addedPizza)}
              type="button"
              color="rgba(86, 0, 0, 1)"
              text="Definir preço"
            />
          </ButtonDiv>
        </form>
      </Box>
    </WhiteBackGroundDiv>
  );
};
