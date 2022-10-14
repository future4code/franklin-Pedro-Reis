import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, Box } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { VideoCardForSearch } from "../../components";
import { LoginContext } from "../../context/Login";
import { useProtectedPage, useForm } from "../../hooks";
import { useAppNavigate } from "../../routes/coordinator";
import { searchYoutube } from "../../services/searchYoutube";

export const SearchPage = () => {
  useProtectedPage();
  const { setLoggedUser } = React.useContext(LoginContext);
  const { goToSearchResults } = useAppNavigate();

  const [searchResults, setSearchResults] = useState<any>();
  const [nextPageToken, setNextPageToken] = useState(undefined);
  const { form, onChange } = useForm({
    keyword: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user")?.length) {
      setLoggedUser({
        user: localStorage.getItem("user"),
        email: localStorage.getItem("email"),
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = async (keyword: string) => {
    setNextPageToken(undefined);
    const response = await searchYoutube(keyword, nextPageToken, 24);
    setNextPageToken(response?.data.nextPageToken);
    setSearchResults(response?.data.items);
  };

  const nextPageSearch = async () => {
    const response = await searchYoutube(form.keyword, nextPageToken, 24);
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
        console.log("pesquisou");
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
              <VideoCardForSearch
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
