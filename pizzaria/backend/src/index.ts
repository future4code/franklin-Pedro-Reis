import express from "express";
import cors from "cors";
import { userRouter } from "./router/userRouter";
import { pizzaRouter } from "./router/pizzaRouter";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});
export default app;

app.use("/", userRouter);
app.use("/", pizzaRouter);
