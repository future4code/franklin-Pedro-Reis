import { useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/criar-conta/");
  };

  const goToAdminHome = () => {
    navigate("/admin/");
  };

  const goToAdminAddItem = () => {
    navigate(`/admin/novo`);
  };

  const goToAdminOrders = () => {
    navigate(`/admin/pedidos`);
  };

  const goToAdminOrderDeatils = (orderId: string) => {
    navigate(`/admin/pedidos/${orderId}`);
  };
  const goToUserHome = () => {
    navigate("/home/");
  };

  const goToUserMakeOrder = () => {
    navigate(`/pedido/`);
  };

  const goToUserCheckout = () => {
    navigate(`/checkout`);
  };

  const goToUserOrderDetails = (orderId: string) => {
    navigate(`/pedido/${orderId}`);
  };

  return {
    goToLogin,
    goToSignUp,
    goToAdminHome,
    goToAdminAddItem,
    goToAdminOrders,
    goToAdminOrderDeatils,
    goToUserHome,
    goToUserMakeOrder,
    goToUserCheckout,
    goToUserOrderDetails,
  };
};