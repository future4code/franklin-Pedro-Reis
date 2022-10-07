import { Box, Text } from "@chakra-ui/react";
import { Button, ButtonDiv } from "../../components";
import { Title } from "../../components/Title/Title";
import { useAppNavigate } from "../../router/coordinator";

export const AdminHome = () => {
  const { goToAdminAddItem, goToAdminOrders } = useAppNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      css={`
        margin-top: 30px;
      `}
    >
      <Title text={"APP DE PEDIDOS"} />
      <Text
        fontSize="lg"
        textAlign="center"
        color="black"
        css={`
          padding: 10px;
        `}
      >
        Como podemos ajuda-lo hoje?
      </Text>
      <ButtonDiv>
        <Button
          onClick={goToAdminOrders}
          type="submit"
          color="rgba(86, 0, 0, 1)"
          text="Ver pedidos"
        />
        <Button
          onClick={goToAdminAddItem}
          type="submit"
          color="rgba(86, 0, 0, 1)"
          text="Adicionar pizzas"
        />
      </ButtonDiv>
    </Box>
  );
};
