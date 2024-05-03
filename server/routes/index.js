import { Router } from "express";
import { getUsers } from "../models/user.js";

const router = Router();

router.get("/gettasks", (req, res) => {
  getUsers((err, data) => {
    if (err) {
      return res.status(500).json({ error: "Error al mostrar usuarios" });
    } else {
      const users = data.map((user) => [
        user.USER_ID,
        user.USER_NAME,
        user.USER_JOB,
      ]);
      res.json(users);
    }
  });
});

router.post("/tasks", (req, res) => {
  res.send("Hello World");
});

router.get("/tasks/:id", (req, res) => {
  res.send("Hello World");
});

router.delete("/tasks/:id", (req, res) => {
  res.send("Hello World");
});

router.put("/tasks/:id", (req, res) => {
  res.send("Hello World");
});

export default router;
