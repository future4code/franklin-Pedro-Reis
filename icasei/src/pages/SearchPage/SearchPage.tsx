import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, Input, InputRightElement, Box } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { VideoCardForSearch } from "../../components";
import { useProtectedPage, useForm } from "../../hooks";
import { useAppNavigate } from "../../routes/coordinator";
import { searchYoutube } from "../../services/searchYoutube";

interface snippet {
  snippet: Array<VideoSearchParams>;
}

export interface VideoSearchParams {
  data: {
    snippet: {
      channelTitle: string;
      description: string;
      title: string;
      thumbnails: { default: { url: string } };
    };
  };
}

export const SearchPage = () => {
  useProtectedPage();
  const { goToSearchResults } = useAppNavigate();

  const [searchResults, setSearchResults] = useState<snippet[] | []>([]);
  const [nextPageToken, setNextPageToken] = useState(undefined);
  const { form, onChange } = useForm({
    keyword: "",
  });

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
        const newResults = (await nextPageSearch()) as never;
        searchResults.push(newResults);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    search(form.keyword);
  };

  return (
    <Box
      padding="20px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <form onSubmit={onSubmit}>
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
            as="button"
            onClick={onSubmit}
            children={<SearchIcon />}
          />
        </InputGroup>
      </form>
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
