import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useForm, useProtectedPage } from "../../hooks";
import { searchYoutube } from "../../services/searchYoutube";

export const SearchPage = () => {
  useProtectedPage();
  const { form, onChange } = useForm({
    keyword: "",
  });

  const searchResults = async (keyword: string) => {
    const response = await searchYoutube(keyword);
    return response?.data.items;
  };

  return (
    <Box>
      <InputGroup>
        <Input
          id="keyword"
          name="keyword"
          value={form.keyword}
          type="text"
          onChange={onChange}
          placeholder="Pesquisar"
        />
        <InputRightElement
          onClick={() => searchResults(form.keyword)}
          children={<SearchIcon />}
        />
      </InputGroup>
    </Box>
  );
};
