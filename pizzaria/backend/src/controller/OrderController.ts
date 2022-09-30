import { Request, Response } from "express";
import OrderBusiness from "../business/OrderBusiness";

export class OrderController {
  constructor(protected orderBusiness: OrderBusiness) {}

  public newOrder = async (req: Request, res: Response) => {
    try {
      const input: any = {
        token: req.headers.authorization,
        id: req.body.id,
        client_email: req.body.client_email,
        price_id: req.body.price_id,
        quantity: req.body.quantity,
        status: req.body.status,
      };

      const response = await this.orderBusiness.createOrder(input);

      res.status(200).send(response);
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
