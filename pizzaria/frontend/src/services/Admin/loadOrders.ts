import { instance } from "../api";

export const loadOrders = async () => {
  try {
    const response = await instance.get(`/orders`);

    return response.data;
  } catch (error) {
    alert("Falha na requisição");
  }
};
