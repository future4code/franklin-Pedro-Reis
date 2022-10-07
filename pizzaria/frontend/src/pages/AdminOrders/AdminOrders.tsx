import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Button, ButtonDiv, Order } from "../../components";
import { Title } from "../../components/Title/Title";
import { useAppNavigate } from "../../router/coordinator";
import { loadOrders } from "../../services/Admin/loadOrders";

export const AdminOrders = () => {
  const { goToAdminHome } = useAppNavigate();
  const [orders, setOrders] = useState<any[]>();

  useEffect(() => {
    const loadedOrders = async () => {
      const response = await loadOrders();
      setOrders(response.orderList);
    };
    loadedOrders();
    console.log(orders);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      color="black"
      css={`
        margin-top: 20px;
      `}
    >
      <Title text={"PEDIDOS"} />
      <Text
        fontSize="lg"
        textAlign="center"
        color="black"
        css={`
          padding: 10px;
        `}
      >
        Verifique os detalhes do pedido e altere o status.
      </Text>
      {orders &&
        orders.map((order: any) => (
          <Order
            date="24/10/2020"
            order_id={order.id}
            price={`R$ ${order.quantity * order.price}`}
            status="Em entrega"
          />
        ))}
      <ButtonDiv>
        <Button
          onClick={goToAdminHome}
          type="submit"
          color="rgba(86, 0, 0, 1)"
          text="Voltar para home"
        />
      </ButtonDiv>
    </Box>
  );
};
