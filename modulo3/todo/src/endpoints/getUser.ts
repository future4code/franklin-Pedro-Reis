import { Request, Response } from "express";
import connection from "../connection";

interface usersInteraface {
  users: string[];
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const users: string[] = await connection("users");
    const result: usersInteraface[] = [
      {
        users,
      },
    ];

    res.send(result[0]);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default getUsers;
