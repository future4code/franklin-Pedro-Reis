import axios from "axios";

const URL = "https://www.googleapis.com/youtube/v3/search";
const KEY = "AIzaSyAHrYm5qm_Pa_p4JweQg7uaKlq9aV0HuZM";

export const searchYoutube = async (keyword: string) => {
  var params = {
    part: "snippet",
    key: KEY,
    q: keyword,
    type: "video",
  };

  try {
    const response = await axios.get(URL, { params: params });
    return response;
  } catch (error) {
    console.error(error);
  }
};
