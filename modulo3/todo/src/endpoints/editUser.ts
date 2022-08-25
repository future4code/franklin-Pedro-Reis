import { Request, Response } from "express";
import connection from "../connection";

const editUser = async (req: Request, res: Response) => {
  try {
    const newData = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
    };
    await connection("users").update(newData).where({ id: req.params.id });

    const response = `Cadastro alterado com sucesso`;

    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default editUser;
