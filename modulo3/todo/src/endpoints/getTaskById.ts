import { Request, Response } from "express";
import connection from "../connection";

const getTaskById = async (req: Request, res: Response) => {
  try {
    const result = await connection.raw(
      `SELECT * FROM tasks WHERE id = ${req.params.taskId} AND id_user = ${req.params.id}`
    );
    res.send(result[0][0]);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default getTaskById;
