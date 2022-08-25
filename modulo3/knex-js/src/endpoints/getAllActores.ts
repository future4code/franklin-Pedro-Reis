import { Request, Response } from "express";
import connection from "../connection";

const getAllActors = async (req: Request, res: Response) => {
  try {
    const result = await connection("atores");
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default getAllActors;
