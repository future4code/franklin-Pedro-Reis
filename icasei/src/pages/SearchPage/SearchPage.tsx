import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

export const SearchPage = () => {
  return (
    <Box>
      <InputGroup>
        <Input placeholder="Enter amount" />
        <InputRightElement children={<SearchIcon />} />
      </InputGroup>
    </Box>
  );
};
