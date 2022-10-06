import { Routes, Route } from "react-router-dom";
import { AdminAddItem, AdminHome, Error, Login, SignUp } from "../pages";
import { AdminOrderDetails } from "../pages/AdminOrderDetails/AdminOrderDetails";
import { AdminOrders } from "../pages/AdminOrders/AdminOrders";
import { Home } from "../pages/Home/Home";
import { UserCheckout } from "../pages/UserCheckout/UserCheckout";
import { UserHome } from "../pages/UserHome/UserHome";
import { UserMakeOrder } from "../pages/UserMakeOrder/UserMakeOrder";
import { UserOrderDetails } from "../pages/UserOrderDetails/UserOrderDetails";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="criar-conta" element={<SignUp />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/novo" element={<AdminAddItem />} />
        <Route path="admin/pedidos" element={<AdminOrders />} />
        <Route path="admin/pedidos/:id" element={<AdminOrderDetails />} />
        <Route path="*" element={<Error />} />
        <Route path="home" element={<UserHome />} />
        <Route path="pedido" element={<UserMakeOrder />} />
        <Route path="pedido/:id" element={<UserOrderDetails />} />
        <Route path="checkout" element={<UserCheckout />} />
        <Route element={<Error />} />
      </Routes>
    </div>
  );
};
