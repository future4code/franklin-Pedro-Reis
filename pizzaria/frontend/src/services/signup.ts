import axios from "axios";
import { BASE_URL } from "../constants/urls";

interface SignUpInfo {
  name: string;
  email: string;
  whatsapp: string;
  password: string;
  cep: string;
  street: string;
  district: string;
  number: string;
  reference: string;
}

interface SignUpProps {
  body: SignUpInfo;
}

export const signup = async (body: SignUpProps) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, body);
    localStorage.setItem("token", response.data.token);
    alert(response.data.message);
    return response;
  } catch (error) {
    alert("Revise seus dados");
  }
};
