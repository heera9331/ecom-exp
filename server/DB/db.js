import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongooseURL = process.env.mongooseURL;

mongoose.connect(mongooseURL);

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  username: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
    trim: true,
  },
  contactNumber: { type: Number, unique: true, require: true, trim: true },
  password: { type: String, require: true, minLength: 8, trim: true },
});

export const User = mongoose.model("Users", userSchema);
