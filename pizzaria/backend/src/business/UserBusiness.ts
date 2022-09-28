import { BaseDatabase } from "../database/BaseDatabase";
import UserDatabase from "../database/UserDatabase";
import User from "../model/User";
import Authenticator, { authenticationData } from "../services/authenticator";
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
    const reference = input.reference;
    const role = input.role;
    if (
      !name ||
      !email ||
      !whatsapp ||
      !password ||
      !cep ||
      !street ||
      !district ||
      !number ||
      !reference
    ) {
      throw new Error("Favor insira todos os dados obrigatórios");
    }
    if (!email.includes("@")) {
      throw new Error("Favor, insira um email válido");
    }
    if (password.lenght < 6) {
      throw new Error("A senha deve ter pelo menos 6 caracteres");
    }
    if (role && role !== "admin" && role !== "normal") {
      throw new Error(
        "Insira o role do user: admin ou normal, deixe vazio para normal"
      );
    }

    const id = new IdGenerator().generateId();
    const hashPassword = await new HashManager().hash(password);

    const newUser = new User(
      id,
      name,
      email,
      whatsapp,
      hashPassword,
      cep,
      street,
      district,
      number,
      reference,
      role
    );

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(newUser);

    const payload: authenticationData = {
      id: newUser.getId(),
    };

    const token = new Authenticator().generateToken(payload);

    const response = {
      token,
    };

    return response;
  };
}
