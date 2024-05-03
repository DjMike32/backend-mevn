import express from "express";
import morgan from "morgan";
import cors from "cors";
import crudRouter from "./routes/index.js";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api", crudRouter);

export default app;
