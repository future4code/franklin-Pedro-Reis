import { Request, Response } from "express";
import connection from "../connection";

const createActor = async (req: Request, res: Response) => {
  try {
    await connection.raw(`
    INSERT INTO atores (id, name, salary, birth_date, gender, hometown)
    VALUES (
      '${req.body.id}',
        '${req.body.name}',
        ${req.body.salary},
        '${req.body.birth_date}',
        '${req.body.gender}',
        '${req.body.hometown}'
    )
    `);
    const success = `Inserido ${req.body.name},
    ${req.body.salary},
    ${req.body.birthDate},
    ${req.body.gender},
    ${req.body.hometown} na tabela atores
    `;
    res.send(success);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export default createActor;
