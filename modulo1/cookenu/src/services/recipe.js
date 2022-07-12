import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToRecipesList } from "../router/coordinator";

export const addRecipe = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${baseUrl}/recipe`, body, {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      clear();
      setIsLoading(false);

      alert("Receita criada com sucesso!");
      goToRecipesList(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
};
