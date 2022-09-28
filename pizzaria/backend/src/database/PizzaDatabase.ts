import Pizza, { PizzaTypesAtDatabase } from "../model/Pizza";
import { BaseDatabase } from "./BaseDatabase";

export default class PizzaDatabase extends BaseDatabase {
  public static PIZZA_FLAVORS = "pizzaria_sabores";

  public createPizza = async (pizza: Pizza) => {
    const newPizza: PizzaTypesAtDatabase = {
      id: pizza.getId(),
      name: pizza.getName(),
      description: pizza.getDescription(),
      status: pizza.getStatus(),
    };
    await BaseDatabase.connections(PizzaDatabase.PIZZA_FLAVORS).insert(
      newPizza
    );
  };
}
