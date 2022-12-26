import { Box, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

interface OrderDetailBoxProps {
  quantity: number;
  flavour: string;
  size: string;
  price: number;
  onClick?: () => void;
}

export const OrderDetailBox = (props: OrderDetailBoxProps) => {
  return (
    <Box
      role="button"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-evenly"
      maxW="100vh"
      onClick={props.onClick}
      width="100%"
      margin="20px"
    >
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.quantity}x
      </Text>
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.flavour}
      </Text>
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        {props.size}
      </Text>
      <Text fontSize="16px" color="rgba(144, 19, 19, 1)">
        R$ {props.price}
      </Text>
      <CloseIcon color="rgba(144, 19, 19, 1)" />
    </Box>
  );
};
