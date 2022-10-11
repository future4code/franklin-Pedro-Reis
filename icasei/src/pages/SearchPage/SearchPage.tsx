import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

export const SearchPage = () => {
  useProtectedPage();
  return (
    <Box>
      <InputGroup>
        <Input placeholder="Enter amount" />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
    </Box>
  );
};
