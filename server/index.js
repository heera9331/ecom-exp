import express from "express";
import connectDB from "./utils/db.js";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();


app.use(cors())
app.use(express.json())



app.use("/api/v1", router);



app.listen(PORT, () => {
  console.log("server has started on port", PORT);
  connectDB();
});
