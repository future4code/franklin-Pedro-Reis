import { Request, Response } from "express";
import PriceBusiness from "../business/PriceBusiness";

export class PriceController {
  constructor(protected priceBusiness: PriceBusiness) {}

  public setPizzaPrice = async (req: Request, res: Response) => {
    try {
      const input: any = {
        token: req.headers.authorization,
        sabor_id: req.body.sabor_id,
        tipo_id: req.body.tipo_id,
        price: req.body.price,
      };

      const response = await this.priceBusiness.setPrice(input);

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
