import { Button, ButtonDiv, PriceInput } from "../../components";
import { Box, Text } from "@chakra-ui/react";
import { Title } from "../../components/Title/Title";
import { useAppNavigate } from "../../router/coordinator";

export const AdminSetPrice = () => {
  const { goToAdminHome } = useAppNavigate();
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={`
          margin-top: 20px;
        `}
      >
        <Title text={"DEFINA O PREÇO DA PIZZA"} />
        <Text
          fontSize="lg"
          textAlign="center"
          color="black"
          maxW="350px"
          css={`
            padding: 10px;
          `}
        >
          Agora, insira o valor e clique no checkbox para confirmar.
        </Text>
        <PriceInput label="BROTO" placeholder="R$" name="broto" type="text" />
        <PriceInput label="MÉDIA" placeholder="R$" name="media" type="text" />
        <PriceInput
          label="FAMILIA"
          placeholder="R$"
          name="familia"
          type="text"
        />
        <PriceInput
          label="SUPER GG"
          placeholder="R$"
          name="superGG"
          type="text"
        />
        <ButtonDiv>
          <Button
            onClick={goToAdminHome}
            type="button"
            color="rgba(86, 0, 0, 1)"
            text="Voltar pra Home"
          />
        </ButtonDiv>
      </Box>
    </div>
  );
};
