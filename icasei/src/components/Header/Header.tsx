import { Box, Link, Text } from "@chakra-ui/react";
import React from "react";
import { LoginContext } from "../../context/Login";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

export const Header = () => {
  const { logout, loggedUser } = React.useContext(LoginContext);

  return (
    <Box
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
      padding="12px"
    >
      {loggedUser === undefined ? (
        <ColorModeSwitcher />
      ) : (
        <>
          <Box w="120px">
            <Text>Olá, {loggedUser.user}!</Text>
            <Text fontSize="xs">{loggedUser.email}</Text>
          </Box>
          <Box w="120px">
            <ColorModeSwitcher />
          </Box>
          <Box w="120px">
            <Link onClick={() => logout()}>Logout</Link>
          </Box>
        </>
      )}
    </Box>
  );
};
