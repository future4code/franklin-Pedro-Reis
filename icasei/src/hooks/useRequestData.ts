import { useEffect, useState } from "react";
import { searchYoutube } from "../services/searchYoutube";

export const useRequestData = (keyword: string, maxResults: number) => {
  const [searchData, setSearchData] = useState<any[] | []>([]);
  const [nextPage, setNextPage] = useState(undefined);

  useEffect(() => {
    const search = async (searchKeyword: string, maxResults: number) => {
      const response = await searchYoutube(searchKeyword, nextPage, maxResults);
      setNextPage(response?.data.nextPageToken);
      const newList = [...searchData, ...response?.data.items];
      setSearchData(newList);
    };
    search(keyword, maxResults);
  }, [keyword, maxResults, nextPage, searchData]);

  return searchData;
};
