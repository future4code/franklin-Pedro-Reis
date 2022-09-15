import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const getTrips = async (props) => {
  const response = await axios.get(`${baseUrl}/trips/`, {
    headers: {
      auth: props,
    },
  });
  return response.data;
};
