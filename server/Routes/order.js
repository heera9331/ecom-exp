import { Router } from "express";
import { addOrder, allOrders, deleteOrder, getOrder, updateOrder } from "../controllers/order.js";

const order = Router()

order.get("/allOrders", allOrders)

order.get("/getOrder", getOrder)

order.post("/addOrder", addOrder)

order.put("/updateOrder", updateOrder)

order.delete("/cancelledOrder", deleteOrder)

export default order