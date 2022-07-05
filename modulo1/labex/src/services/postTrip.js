import axios from "axios";
import { baseUrl } from "../constants/baseUrl";

export const postTrip = async (props) => {
  const response = await axios.post(`${baseUrl}/trips`, {
    name: props.name,
    planet: props.planet,
    date: props.date,
    description: props.description,
    durationInDays: props.duration,
  });
  return response;
};
