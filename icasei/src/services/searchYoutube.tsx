import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3/search";
const KEY = "AIzaSyDjkNStOvJEjqefxy8SWLWXs5e8RMsypS8";

export const searchYoutube = async (
  keyword: string,
  pageToken: string | undefined
) => {
  const params = {
    part: "snippet",
    key: KEY,
    q: keyword,
    type: "video",
    maxResults: 50,
    pageToken: pageToken,
  };

  try {
    const response = await axios.get(URL, { params: params });
    return response;
  } catch (error) {
    console.error(error);
  }
};
