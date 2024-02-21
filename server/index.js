import express from "express";
import connectDB from "./utils/db.js";

import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", async (req, res, next) => {
  res.send("working");
});

app.listen(PORT, () => {
  console.log("server has started on port", PORT);
  connectDB();
});
