import { axiosInstance } from "./axiosInstance";

export const postTrip = async (props) => {
  const response = await axiosInstance.post(`/trips`, {
    name: props.name,
    planet: props.planet,
    date: props.date,
    description: props.description,
    durationInDays: props.durationInDays,
  });
  return response;
};
