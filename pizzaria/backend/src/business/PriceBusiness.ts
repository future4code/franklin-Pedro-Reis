import PizzaDatabase from "../database/PizzaDatabase";
import PriceDatabase from "../database/PriceDatabase";
import Pizza from "../model/Pizza";
import Price from "../model/Price";
import Authenticator from "../services/authenticator";
import HashManager from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";
import { PizzaSize, UserRole } from "../types";

export default class PriceBusiness {
  constructor(
    protected priceDatabase: PriceDatabase,
    protected authenticator: Authenticator,
    protected idGenerator: IdGenerator,
    protected hashManager: HashManager
  ) {}
  public setPrice = async (input: any) => {
    const sabor_id = input.sabor_id;
    const tipo_id = input.tipo_id;
    const price = input.price;
    const token = input.token;

    const payload = this.authenticator.getTokenData(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }

    if (payload.role !== UserRole.ADMIN) {
      throw new Error("Apenas admins podem altera o preço das pizzas");
    }

    if (!sabor_id || !tipo_id) {
      throw new Error(
        "Preencha os IDs do sabor e o tamanho para alterar o preço"
      );
    }

    if (
      tipo_id !==
      (PizzaSize.BROTO ||
        PizzaSize.FAMILIA ||
        PizzaSize.MEDIA ||
        PizzaSize.SUPERGG ||
        PizzaSize.REDONDA ||
        PizzaSize.OUTROS)
    ) {
      throw new Error("Tamanho de pizza inválido");
    }

    if (!price) {
      throw new Error("Insira o preço da pizza");
    }

    if (price && typeof price !== "number") {
      throw new Error("O preço aceita apenas números");
    }

    const pizzaAtDb = await this.priceDatabase.selectPizza(sabor_id);

    if (!pizzaAtDb) {
      throw new Error("Id da Pizza incorreto");
    }

    const sizeAtDb = await this.priceDatabase.selectSize(tipo_id);

    if (!sizeAtDb) {
      throw new Error("Id do tamanho incorreto");
    }

    const id = new IdGenerator().generateId();

    const pizzaPrice = new Price(id, sabor_id, tipo_id, price);

    const priceDatabase = new PriceDatabase();
    await priceDatabase.setPrice(pizzaPrice);

    const response = {
      message: `Preço da pizza ${pizzaAtDb.name} no tamanho ${{
        sizeAtDb,
      }} agora é ${price}`,
    };

    return response;
  };
}
