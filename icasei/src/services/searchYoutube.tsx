import axios from "axios";

const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos";
const KEY = "AIzaSyCrX1phOy0-qhqxXMrBYFGaxDis33qT4f0";

export const searchYoutube = async (
  keyword: string,
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
