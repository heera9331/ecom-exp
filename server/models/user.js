import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    username :{
        type: String,
        unique: true, 
        require: true,
        trim: true
    },

    password:{
        type :String,
        require : true,
        trim : true,
        minLength: 8

    }
})

const User = mongoose.model("users",userSchema)

export {User}