import app from "./app";
import createActor from "./endpoints/createActor";
import getAllActors from "./endpoints/getAllActores";

app.get("/atores", getAllActors);

app.post("/atores", createActor);
