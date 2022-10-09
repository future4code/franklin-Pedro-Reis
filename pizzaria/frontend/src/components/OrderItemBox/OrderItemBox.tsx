import { Box, Text } from "@chakra-ui/react";

interface OrderItemBoxProps {
  date: string;
  order_id: string;
  price: string;
  status: string;
  onClick: () => void;
}

export const OrderItemBox = (props: OrderItemBoxProps) => {
  return (
    <Box
      role="button"
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      maxW="100vh"
      onClick={props.onClick}
      _hover={{ bg: "red.100" }}
      _focus={{ boxShadow: "outline" }}
      width="100%"
      margin="20px"
    >
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.date}
      </Text>
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.order_id}
      </Text>
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.price}
      </Text>
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.status}
      </Text>
    </Box>
  );
};
