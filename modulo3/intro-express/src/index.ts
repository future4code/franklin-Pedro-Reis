import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

const users = [
  {
    id: 1,
    name: "Pedro",
    phone: 21964443144,
    email: "pedro@gmail.com",
    website: "youtube.com",
  },
  {
    id: 2,
    name: "Jaq",
    phone: 21963333133,
    email: "jaq@gmail.com",
    website: "google.com",
  },
  {
    id: 3,
    name: "Paulo",
    phone: 21962221222,
    email: "paulo@gmail.com",
    website: "facebook.com",
  },
];

const posts = [
  {
    id: 1,
    title: "Post 1 do user 1",
    body: "Body do Post 1 do user 1",
    userId: 1,
  },
  {
    id: 2,
    title: "Post 2 do user 1",
    body: "Body do Post 2 do user 1",
    userId: 1,
  },
  {
    id: 3,
    title: "Post 1 do user 2",
    body: "Body do Post 1 do user 2",
    userId: 2,
  },
  {
    id: 4,
    title: "Post 2 do user 2",
    body: "Body do Post 2 do user 2",
    userId: 2,
  },
  {
    id: 5,
    title: "Post 1 do user 3",
    body: "Body do Post 1 do user 3",
    userId: 3,
  },
  {
    id: 6,
    title: "Post 2 do user 3",
    body: "Body do Post 2 do user 3",
    userId: 3,
  },
];

app.get("/", (req, res) => {
  res.send(posts);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  const foundId = posts.filter((post) => {
    return post.userId === Number(userId);
  });
  res.send(foundId);
});
