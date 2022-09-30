import { Router } from "express";
import OrderBusiness from "../business/OrderBusiness";
import { OrderController } from "../controller/OrderController";
import OrderDatabase from "../database/OrderDatabase";
import PizzaDatabase from "../database/PizzaDatabase";
import PriceDatabase from "../database/PriceDatabase";
import UserDatabase from "../database/UserDatabase";
import Authenticator from "../services/authenticator";
import HashManager from "../services/hashManager";
import { IdGenerator } from "../services/idGenerator";

export const orderRouter = Router();

const orderController = new OrderController(
  new OrderBusiness(
    new OrderDatabase(),
    new PizzaDatabase(),
    new UserDatabase(),
    new PriceDatabase(),
    new Authenticator(),
    new IdGenerator(),
    new HashManager()
  )
);

orderRouter.post("/orderPizza", orderController.newOrder);
