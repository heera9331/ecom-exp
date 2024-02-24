import { Router } from "express";
import {
  allSellers,
  deleteSeller,
  getSeller,
  registerSeller,
  updateSeller,
} from "../controllers/seller.js";
import { sellerExist } from "../middlewares/seller.js";

const seller = Router();

seller.get("/", (req, res) => {
  res.send("hello from seller");
});

seller.post("/registerSeller", sellerExist, registerSeller);

seller.post("/getSeller", getSeller);

seller.put("/updateSeller", updateSeller);

seller.get("/allSellers", allSellers);

seller.delete("/deleteSeller", deleteSeller);

export default seller;
