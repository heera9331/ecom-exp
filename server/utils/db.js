import mongoose from "mongoose";

const connection = {};

const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    console.log(process.env.mongooseURL);
    const db = await mongoose.connect(process.env.mongooseURL);
    // const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

    console.log(connection);
  } catch (error) {
    console.log(error);
  }
};

// connectDB("mongodb://127.0.0.1:27017/COLLEGE_COUNSELLING");

export default connectDB;
