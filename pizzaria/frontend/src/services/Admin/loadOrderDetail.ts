import { instance } from "../api";

export const loadOrderDetail = async (orderId: string | undefined) => {
  try {
    const response = await instance.get(`/order/${orderId}`);
    return response.data;
  } catch (error) {
    alert("Falha na requisição");
  }
};
