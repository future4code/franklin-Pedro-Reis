import { Request, Response } from "express";
import connection from "../connection";

const getUserById = async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(
      `SELECT * FROM users WHERE id = ${req.params.id}`
    );
    res.send(result[0][0]);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default getUserById;
