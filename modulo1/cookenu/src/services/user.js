import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToRecipesList } from "../router/coordinator";

export const login = (body, clear, navigate) => {
  axios
    .post(`${baseUrl}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToRecipesList(navigate);
    })
    .catch((err) => console.log(err));
};
