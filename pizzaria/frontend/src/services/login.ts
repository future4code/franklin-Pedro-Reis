import axios from "axios";
import { BASE_URL } from "../constants/urls";

interface AuthInfo {
  email: string;
  password: string;
}

interface LoginProps {
  body: AuthInfo;
}

export const login = async (body: LoginProps) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, body);
    localStorage.setItem("token", response.data.token);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    alert("Revise seus dados");
  }
};
