import { Button, ButtonDiv, LoggedDiv, RowAlignDiv } from "../../components";
import { useAppNavigate } from "../../router/coordinator";

export const AdminHome = () => {
  const { goToAdminAddItem, goToAdminOrders } = useAppNavigate();

  return (
    <LoggedDiv>
      <RowAlignDiv>
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
      </RowAlignDiv>
    </LoggedDiv>
  );
};
