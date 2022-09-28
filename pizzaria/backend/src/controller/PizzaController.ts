import { Request, Response } from "express";
import PizzaBusiness from "../business/PizzaBusiness";

export class PizzaController {
  constructor(protected pizzaBusiness: PizzaBusiness) {}

  public createPizza = async (req: Request, res: Response) => {
    try {
      const input: any = {
        token: req.headers.authorization,
        name: req.body.name,
        description: req.body.description,
        status: req.body.status,
      };

      const response = await this.pizzaBusiness.createPizza(input);

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
