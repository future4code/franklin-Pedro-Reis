import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const postApplyTrip = async (props) => {
  const response = await axios.post(
    `${baseUrl}/trips/${props.path}/apply`,
    props.body
  );
  return response;
};
