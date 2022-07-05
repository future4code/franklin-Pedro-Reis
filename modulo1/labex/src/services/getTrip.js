import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const getTrip = async (props) => {
  const response = await axios.get(`${baseUrl}/trip/${props.path}/`, {
    headers: {
      auth: props.token,
    },
  });

  return response.data;
};
