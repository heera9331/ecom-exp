import { Router } from "express";
import { deleteUser, getUser, getUsers, registerUser, updateUser } from "../controllers/user.js";

const user = Router()

user.get('/',(req,res)=>{
    res.send("user rounting working fine")
})

user.post("/registeruser",registerUser)

user.get("/getUser",getUser )

user.get("/getUsers",getUsers)

user.put("/updateUser",updateUser)

user.get("/deleteUser",deleteUser)

export default user