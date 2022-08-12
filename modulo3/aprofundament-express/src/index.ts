import express from "express";
import { AddressInfo } from "net";
const fs = require("fs");

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao iniciar o servidor.`);
  }
});

let rawdata = fs.readFileSync(
  "/Users/colaborador/Desktop/franklin-Pedro-Reis/modulo3/aprofundament-express/src/data.json"
);
let tasks = JSON.parse(rawdata);

const writeFile = () => {
  fs.writeFile(
    "/Users/colaborador/Desktop/franklin-Pedro-Reis/modulo3/aprofundament-express/src/data.json",
    JSON.stringify(tasks),
    (err: any) => {
      if (err) throw err;
      console.log("New data added");
    }
  );
};

interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

app.get("/:userId/alltasks", (req, res) => {
  const userId = req.params.userId;

  const userTasks = tasks.filter((task: any) => {
    return task.userId === Number(userId);
  });

  res.send(userTasks);
});

app.get("/:userId/finishedtasks", (req, res) => {
  const userId = req.params.userId;

  const userTasks = tasks.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const doneTaks = userTasks.filter((task: any) => {
    return task.completed === true;
  });

  res.send(doneTaks);
});

app.post("/:userId/newtask", (req, res) => {
  const userId = req.params.userId;
  const body = req.body;

  const newTask: Task = {
    userId: Number(userId),
    id: tasks.length + 1,
    title: body.title,
    completed: false,
  };

  tasks.push(newTask);

  writeFile();

  const userTasks = tasks.filter((task: any) => {
    return task.userId === Number(userId);
  });

  res.send(userTasks);
});

app.post("/:userId/task/:taskId", (req, res) => {
  const userId = req.params.userId;
  const taskId = req.params.taskId;

  const userTasks = tasks.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const [selectedTask] = userTasks.filter((task: any) => {
    return task.id === Number(taskId);
  });

  selectedTask.completed = !selectedTask.completed;

  writeFile();

  res.send(userTasks);
});

app.delete("/:userId/task/:taskId", (req, res) => {
  const userId = req.params.userId;
  const taskId = req.params.taskId;

  const userTasks = tasks.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const [selectedTask] = userTasks.filter((task: any) => {
    return task.id === Number(taskId);
  });

  const index = tasks.indexOf(selectedTask);

  if (index > -1) {
    tasks.splice(index, 1);
  }
  writeFile();

  res.send(userTasks);
});
