import connection from "../connection";
import User from "../model/User";
import HashManager from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

export default class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const whatsapp = input.whatsapp;
    const password = input.password;
    const cep = input.cep;
    const street = input.street;
    const district = input.district;
    const number = input.number;
    const reference = input.referenc;
    if (
      !name ||
      !email ||
      !whatsapp ||
      !password ||
      !cep ||
      !street ||
      !district ||
      !number ||
      reference
    ) {
      throw new Error("Favor insira todos os dados obrigatórios");
    }
    if (!email.includes("@")) {
      throw new Error("Favor, insira um email válido");
    }
    if (password.lenght < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres");
    }

    const [user] = await connection("pizzaria_cliente").where({
      email,
      whatsapp,
    });

    if (user) {
      throw new Error("Usuário já cadastrado");
    }

    const id = new IdGenerator().generateId();
    const hashPassword = await new HashManager().hash(password);

    const newUser = new User(
      id,
      name,
      email,
      hashPassword,
      cep,
      street,
      district,
      number,
      reference
    );

    // const userDatabase = new UserDatabase()
    // await userDatabase.createUser(newUser);
  };
}
