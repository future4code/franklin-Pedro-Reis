import { Box, Text } from "@chakra-ui/react";

interface OrderProps {
  date: string;
  order_id: string;
  price: string;
  status: string;
}

export const Order = (props: OrderProps) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-evenly"
      width="360px"
      margin="25px"
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
