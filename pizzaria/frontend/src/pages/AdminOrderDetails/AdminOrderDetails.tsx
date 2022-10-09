import { Box, Select, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrderDetailBox } from "../../components/OrderDetailBox/OrderDetailBox";
import { Title } from "../../components/Title/Title";
import { loadOrderDetail } from "../../services/Admin/loadOrderDetail";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface OrderDetailDataType {
  quantity: number;
  name: string;
  tipo_id: string;
  price: number;
  onClick?: () => void;
}

export const AdminOrderDetails = () => {
  const [order, setOrder] = useState<any[]>();
  const { id } = useParams();

  useEffect(() => {
    const getOrderDetails = async () => {
      const response = await loadOrderDetail(id);
      setOrder(response.selectedOrder);
    };
    getOrderDetails();
    console.log(order);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalValue = order?.reduce((accumulator, object) => {
    return accumulator + object.price * object.quantity;
  }, 0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
      color="black"
      css={`
        margin-top: 20px;
        font-style: normal;
      `}
    >
      <Box margin="20px 0">
        <Title text={"PEDIDO #202200001"} />
      </Box>
      {order?.length &&
        order.map((order: OrderDetailDataType) => (
          <OrderDetailBox
            key={Math.random()}
            flavour={order.name}
            price={order.price}
            quantity={order.quantity}
            size={order.tipo_id}
          />
        ))}
      <Box margin="10px 0" display="flex" alignItems="center">
        <Text
          css={`
            padding: 6px;
          `}
        >
          Total
        </Text>
        <Text
          css={`
            padding: 6px;
          `}
          fontSize="larger"
          textAlign="center"
          color="black"
        >
          R$ {totalValue}
        </Text>
      </Box>
      <Select
        css={`
          padding: 20px;
        `}
        fontSize="20px"
        color="#911313"
        variant="unstyled"
        width={200}
        icon={<ChevronDownIcon color="rgba(144, 19, 19, 1)" />}
      >
        <option value="preparando">PREPARANDO</option>
        <option value="delivery">EM DELIVERY</option>
        <option value="finalizado">FINALIZADO</option>
      </Select>
      <Box margin="20px 0">
        <Title text={"ENTREGA"} />
      </Box>
    </Box>
  );
};
