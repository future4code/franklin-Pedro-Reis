import express from "express";
import { AddressInfo } from "net";
import { todos } from "./data";

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

app.get("/:userId/alltasks", (req, res) => {
  const userId = req.params.userId;

  const allTasks = todos.filter((task: any) => {
    return task.userId === Number(userId);
  });

  res.send(allTasks);
});

app.get("/:userId/finishedtasks", (req, res) => {
  const userId = req.params.userId;

  const allTasks = todos.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const doneTaks = allTasks.filter((task: any) => {
    return task.completed === true;
  });

  res.send(doneTaks);
});

app.post("/:userId/newtask", (req, res) => {
  const userId = req.params.userId;
  const body = req.body;

  const allTasks = todos.filter((task: any) => {
    return task.userId === Number(userId);
  });

  allTasks.push(body);

  res.send(allTasks);
});

app.get("/:userId/task/:taskId", (req, res) => {
  const userId = req.params.userId;
  const taskId = req.params.taskId;

  const allTasks = todos.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const selectedTask = allTasks.filter((task: any) => {
    return task.id === Number(taskId);
  });

  res.send(selectedTask);
});

app.post("/:userId/task/:taskId", (req, res) => {
  const userId = req.params.userId;
  const taskId = req.params.taskId;

  const allTasks = todos.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const [selectedTask] = allTasks.filter((task: any) => {
    return task.id === Number(taskId);
  });

  selectedTask.completed = !selectedTask.completed;

  res.send(selectedTask);
});

app.delete("/:userId/task/:taskId", (req, res) => {
  const userId = req.params.userId;
  const taskId = req.params.taskId;

  const allTasks = todos.filter((task: any) => {
    return task.userId === Number(userId);
  });

  const [selectedTask] = allTasks.filter((task: any) => {
    return task.id === Number(taskId);
  });

  const index = allTasks.indexOf(selectedTask);

  if (index > -1) {
    allTasks.splice(index, 1);
  }

  res.send(allTasks);
});
