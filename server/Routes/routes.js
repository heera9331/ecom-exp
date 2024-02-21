import { Router } from "express";
import { user } from "./userRoutes.js";
import { seller } from "./sellerRoutes.js";

const router = Router();

router.use("/user",user);
router.use("/seller",seller);

router.get('/',(req,res)=>{
    res.send("working fine")
})
export {router}