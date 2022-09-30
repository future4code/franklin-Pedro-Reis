import Order, { OrderTypeAtDatabase } from "../model/Order";
import { BaseDatabase } from "./BaseDatabase";

export default class OrderDatabase extends BaseDatabase {
  public static ORDERS = "pizzaria_orders";

  public setOrder = async (order: Order) => {
    const newOrder: OrderTypeAtDatabase = {
      id: order.getId(),
      client_email: order.getClientEmail(),
      price_id: order.getPriceId(),
      quantity: order.getQuantity(),
      status: order.getOrderStatus(),
    };
    await BaseDatabase.connections(OrderDatabase.ORDERS).insert(newOrder);
  };
}
