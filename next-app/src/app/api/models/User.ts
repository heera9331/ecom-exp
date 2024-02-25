import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8
    }
}, { timestamps: true })

const User = mongoose.model("users",userSchema)

export default User