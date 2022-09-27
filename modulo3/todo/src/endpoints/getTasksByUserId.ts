import { Request, Response } from "express";
import connection from "../connection";

interface tasksFromUserInterface {
  tasks: string[];
}

const getTasksByUserId = async (req: Request, res: Response) => {
  try {
    const tasks: string[] = await connection.raw(
      `SELECT * FROM tasks WHERE id_user = ${req.params.id}`
    );

    const result: tasksFromUserInterface[] = [
      {
        tasks,
      },
    ];
    res.send(result[0]);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default getTasksByUserId;
