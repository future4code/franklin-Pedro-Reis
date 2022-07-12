import axios from "axios";
import { baseUrl } from "../constants/baseUrl";
import { goToLogin, goToRecipesList } from "../router/coordinator";

export const login = (
  body,
  clear,
  navigate,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${baseUrl}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(navigate);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
};

export const signup = (body, clear, navigate, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${baseUrl}/user/signup`, body)
    .then((res) => {
      clear();
      setIsLoading(false);
      alert("Conta criada com sucesso!");
      goToLogin(navigate);
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    });
};
