import app from "./app";
import createTask from "./endpoints/createTask";
import createUser from "./endpoints/createUser";
import editUser from "./endpoints/editUser";
import getTaskById from "./endpoints/getTaskById";
import getTasksByUserId from "./endpoints/getTasksByUserId";
import getUsers from "./endpoints/getUser";
import getUserById from "./endpoints/getUserById";

app.get("/users", getUsers);

app.post("/users", createUser);

app.get("/users/:id", getUserById);

app.put("/users/:id/edit", editUser);

app.post("/users/:id/task", createTask);

app.get("/users/:id/task/:taskId", getTaskById);

app.get("/users/:id/tasks", getTasksByUserId);
