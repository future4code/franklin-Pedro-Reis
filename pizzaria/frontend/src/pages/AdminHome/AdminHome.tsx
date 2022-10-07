import { Box } from "@chakra-ui/react";
import {
  Button,
  ButtonDiv,
  WhiteBackGroundDiv,
  RowAlignDiv,
} from "../../components";
import { useAppNavigate } from "../../router/coordinator";

export const AdminHome = () => {
  const { goToAdminAddItem, goToAdminOrders } = useAppNavigate();

  return (
    <WhiteBackGroundDiv>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        css={`
          margin-top: 20px;
        `}
      >
        Bem vindo, admin! Como podemos ajudar?
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
    </WhiteBackGroundDiv>
  );
};
