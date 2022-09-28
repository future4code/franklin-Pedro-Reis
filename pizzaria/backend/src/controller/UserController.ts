import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

export default class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        whatsapp: req.body.whatsapp,
        password: req.body.password,
        cep: req.body.cep,
        street: req.body.street,
        district: req.body.district,
        number: req.body.number,
        reference: req.body.reference,
        role: req.body.role,
      };
      const userBusiness = new UserBusiness();
      const response = await userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).send({ message: error.message });
      }
      res.status(500).send({ message: "Erro inesperado" });
    }
  };
}
