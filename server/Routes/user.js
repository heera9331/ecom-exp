import { Router } from "express";
import { deleteUser, getUser, getUsers, registerUser, updateUser } from "../controllers/user.js";
import { userExist } from "../middlewares/user.js";

const user = Router()

user.get('/',(req,res)=>{
    res.send("user rounting working fine")
})

user.post("/registerUser", userExist, registerUser)

user.get("/getUser",getUser )

user.get("/getUsers",getUsers)

user.put("/updateUser",updateUser)

user.get("/deleteUser",deleteUser)

export default user