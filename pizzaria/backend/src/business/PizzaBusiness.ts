import PizzaDatabase from "../database/PizzaDatabase";
import Pizza from "../model/Pizza";
import Authenticator from "../services/authenticator";
import HashManager from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";
import { UserRole } from "../types";

export default class PizzaBusiness {
  constructor(
    protected pizzaDatabase: PizzaDatabase,
    protected authenticator: Authenticator,
    protected idGenerator: IdGenerator,
    protected hashManager: HashManager
  ) {}
  public createPizza = async (input: any) => {
    const name = input.name;
    const description = input.description;
    const status = input.status;
    const token = input.token;

    if (!name || !description) {
      throw new Error("Por favor, preencha o sabor e a descrição da pizza.");
    }
    const payload = this.authenticator.getTokenData(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }

    if (payload.role !== UserRole.ADMIN) {
      throw new Error("Apenas admins podem criar pizzas");
    }

    const id = new IdGenerator().generateId();

    const newPizza = new Pizza(id, name, description, status);

    const pizzaDatabase = new PizzaDatabase();
    await pizzaDatabase.createPizza(newPizza);

    const response = {
      message: `Pizza de ${name} criada com sucesso!`,
    };

    return response;
  };
}
