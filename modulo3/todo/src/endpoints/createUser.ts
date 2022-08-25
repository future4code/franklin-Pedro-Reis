import { Request, Response } from "express";
import connection from "../connection";

const createUser = async (req: Request, res: Response) => {
  try {
    const createdUser = `"${req.body.name}", "${req.body.nickname}","${req.body.email}"`;

    await connection.raw(
      `INSERT INTO users (name, nickname, email) VALUES (${createdUser});`
    );

    const response = `User: ${req.body.nickname} criado com sucesso`;

    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default createUser;
