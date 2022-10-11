import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useForm, useProtectedPage } from "../../hooks";
import { searchYoutube } from "../../services/searchYoutube";

export const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  useProtectedPage();
  const { form, onChange } = useForm({
    keyword: "",
  });

  const search = async (keyword: string) => {
    const response = await searchYoutube(keyword);
    setSearchResults(response?.data.items);
    return response?.data.items;
  };

  return (
    <Box
      padding="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <InputGroup w="300px">
        <Input
          id="keyword"
          name="keyword"
          value={form.keyword}
          type="text"
          onChange={onChange}
          placeholder="Pesquisar"
        />
        <InputRightElement
          onClick={() => search(form.keyword)}
          children={<SearchIcon />}
        />
      </InputGroup>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {searchResults &&
          searchResults.map((videoData: any) => {
            return (
              <VideoCard
                title={videoData.snippet.title}
                channelTitle={videoData.snippet.channelTitle}
                publishTime={videoData.snippet.publishTime}
                thumbnail={videoData.snippet.thumbnails.default.url}
              />
            );
          })}
      </Box>
    </Box>
  );
};
