import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { AppDataSource } from "./data-source";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(() => {
  console.log("DB connected");

  app.use("/api/users", userRoutes); // 🔥 API

  app.listen(3000, () => {
    console.log("Server running on 3000");
  });
});


