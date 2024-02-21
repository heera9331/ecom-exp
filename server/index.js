import express from "express";
import connectDB from "./utils/db.js";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 8000;
<<<<<<< HEAD
=======
const router = express.Router();
>>>>>>> b73a3724a7cd5fffd90296567f7b481772a1c407
const app = express();


app.use(cors())
app.use(express.json())



app.use("/api/v1", router);
 

app.listen(PORT, () => {
  console.log("server has started on port", PORT);
  connectDB();
});
