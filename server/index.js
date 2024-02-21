import express from "express";
import dotenv from "dotenv";
import { router } from "./Routes/routes.js";
import cors from 'cors';


dotenv.config();
const PORT = process.env.PORT || 8000;

const app = express();


app.use(cors())
app.use(express.json())



app.use("/api/v1", router);



app.listen(PORT, () => {
  console.log("server has started on port", PORT);
});
