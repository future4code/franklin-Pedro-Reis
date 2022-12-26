import axios from "axios";

const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos";
const KEY = "AIzaSyDye1SAn4Y8WrHZ_1q5N3yzkHcYZ3dT-Fg";

export const searchYoutube = async (
  keyword: string | undefined,
  pageToken: string | undefined,
  maxResults: number
) => {
  const params = {
    part: "snippet",
    key: KEY,
    q: keyword,
    type: "video",
    maxResults: maxResults,
    pageToken: pageToken,
  };

  try {
    const response = await axios.get(SEARCH_URL, { params: params });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const loadYoutubeVideo = async (videoId: string | undefined) => {
  const params = {
    id: videoId,
    part: "snippet,statistics",
    key: KEY,
  };

  try {
    const response = await axios.get(VIDEO_URL, { params: params });
    return response;
  } catch (error) {
    console.error(error);
  }
};
