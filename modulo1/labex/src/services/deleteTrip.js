import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const deleteTrip = async (props) => {
  await axios.delete(`${baseUrl}/trips/${props.path}`, {
    headers: {
      auth: props.token,
    },
  });
};
