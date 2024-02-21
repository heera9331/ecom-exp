import { Router } from "express";

const seller = Router()

seller.get('/',(req,res)=>{
    res.send("hello from seller")
})
export {seller}