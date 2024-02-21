import { Router } from "express";

const user = Router()

user.get('/',(req,res)=>{
    res.send("user rounting working fine")
})

export {user}