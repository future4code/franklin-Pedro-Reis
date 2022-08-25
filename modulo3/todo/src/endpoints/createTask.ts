import { Request, Response } from "express";
import connection from "../connection";

function formatedDate(date: string) {
  let day = date.split("/")[0];
  let month = date.split("/")[1];
  let year = date.split("/")[2];

  return year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);
}

const createTask = async (req: Request, res: Response) => {
  try {
    const newTask = {
      id_user: req.params.id,
      title: req.body.title,
      description: req.body.description,
      date: formatedDate(req.body.date),
    };

    await connection("tasks").insert(newTask);

    const response = `Task: ${req.body.title} criada com sucesso`;
    res.send(response);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default createTask;
