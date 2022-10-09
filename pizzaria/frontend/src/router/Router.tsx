import { Routes, Route } from "react-router-dom";
import { LoggedUserContextProvider } from "../context/LoggedUserContext";
import {
  AdminAddItem,
  AdminHome,
  AdminSetPrice,
  Error,
  Login,
  SignUp,
  Home,
} from "../pages";
import { AdminOrderDetails } from "../pages/AdminOrderDetails/AdminOrderDetails";
import { AdminOrders } from "../pages/AdminOrders/AdminOrders";
import { UserCheckout } from "../pages/UserCheckout/UserCheckout";
import { UserHome } from "../pages/UserHome/UserHome";
import { UserMakeOrder } from "../pages/UserMakeOrder/UserMakeOrder";
import { UserOrderDetails } from "../pages/UserOrderDetails/UserOrderDetails";

export const Router = () => {
  return (
    <div>
      <LoggedUserContextProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="criar-conta" element={<SignUp />} />
          <Route path="admin" element={<AdminHome />} />
          <Route path="admin/novo" element={<AdminAddItem />} />
          <Route path="admin/alterar-preco/:id" element={<AdminSetPrice />} />
          <Route path="admin/pedidos" element={<AdminOrders />} />
          <Route path="admin/pedidos/:id" element={<AdminOrderDetails />} />
          <Route path="*" element={<Error />} />
          <Route path="home" element={<UserHome />} />
          <Route path="pedido" element={<UserMakeOrder />} />
          <Route path="pedido/:id" element={<UserOrderDetails />} />
          <Route path="checkout" element={<UserCheckout />} />
          <Route element={<Error />} />
        </Routes>
      </LoggedUserContextProvider>
    </div>
  );
};
