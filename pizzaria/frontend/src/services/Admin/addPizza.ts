import { instance } from "../api";

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
    const response = await instance.post(`/createPizza`, body);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    alert("Revise os campos e tente novamente");
  }
};

export const addPizzaPrice = async (body: PizzaPriceProps) => {
  try {
    const response = await instance.post(`/setPrice`, body);
    alert(response.data.message);
    return response.data;
  } catch (error) {
    alert("Revise os campos e tente novamente");
  }
};
