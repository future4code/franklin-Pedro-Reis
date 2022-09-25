import { Request, Response } from "express";
import connection from "../connection";
import Authenticator from "../services/authenticator";
import { authenticationData } from "../types";

export default async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Por favor, preencha seus dados corretamente.");
    }
    const [user] = await connection("to_do_list_users").where({ email });

    if (!user || user.password !== password) {
      throw new Error("Credenciais de acesso inválidas!");
    }

    const payload: authenticationData = {
      id: user.id,
    };

    const token = new Authenticator().generateToken(payload);

    res.status(201).send({ token });
  } catch (error: any) {
    console.log(error);
    res.status(500).send({ message: error });
  }
}
