import axios from "axios";
import { BASE_URL } from "../../constants/urls";

interface PizzaProps {
  name: string;
  description: string;
}

interface PizzaPriceProps {
  sabor_id: string;
  tipo_id: string;
  price: number;
}

export const createPizza = async (body: PizzaProps) => {
  try {
    const response = await axios.post(`${BASE_URL}/createPizza`, body);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    alert("Revise os campos e tente novamente");
  }
};

export const addPizzaPrice = async (body: PizzaPriceProps) => {
  try {
    const response = await axios.post(`${BASE_URL}/setPrice`, body);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    alert("Revise os campos e tente novamente");
  }
};
