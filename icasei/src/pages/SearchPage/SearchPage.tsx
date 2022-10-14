import { SearchIcon } from "@chakra-ui/icons";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { VideoCard } from "../../components/VideoCard/VideoCard";
import { useForm, useProtectedPage } from "../../hooks";
import { useAppNavigate } from "../../routes/coordinator";
import { searchYoutube } from "../../services/searchYoutube";

export const SearchPage = () => {
  const { goToSearchResults } = useAppNavigate();
  const [searchResults, setSearchResults] = useState<any>();
  const [nextPageToken, setNextPageToken] = useState(undefined);
  useProtectedPage();
  const { form, onChange } = useForm({
    keyword: "",
  });

  const search = async (keyword: string) => {
    setNextPageToken(undefined);
    const response = await searchYoutube(keyword, nextPageToken);
    setNextPageToken(response?.data.nextPageToken);
    setSearchResults(response?.data.items);
  };

  const nextPageSearch = async () => {
    const response = await searchYoutube(form.keyword, nextPageToken);
    setNextPageToken(response?.data.nextPageToken);
    const newList = [...searchResults, ...response?.data.items];
    setSearchResults(newList);
  };

  window.onscroll = async function () {
    if (
      window.innerHeight + Math.ceil(window.pageYOffset) >=
      document.body.offsetHeight
    ) {
      try {
        const newResults = await nextPageSearch();
        searchResults.push(newResults);
      } catch (error) {
        console.log(error);
      }
    }
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
                url={videoData.snippet.thumbnails.default.url}
                onClick={() => goToSearchResults(videoData.id.videoId)}
              />
            );
          })}
      </Box>
    </Box>
  );
};
