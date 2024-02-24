import { Router } from "express";
import user  from "./user.js";
import  seller  from "./seller.js";
import order from "./order.js";

const router = Router();

router.use("/user",user);
router.use("/seller",seller);
router.use("/user",order)


router.get('/',(req,res)=>{
    res.send("working fine")
})
export {router}