import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToRecipesList } from "../router/coordinator";

export const addRecipe = (body, clear, navigate) => {
  axios
    .post(`${baseUrl}/recipe`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      clear();
      alert("Receita criada com sucesso!");
      goToRecipesList(navigate);
    })
    .catch((err) => alert(err.response.data.message));
};
