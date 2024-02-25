import mongoose from "mongoose";

const connection = {};
const mongooseURL = process.env.mongooseURL;
const connectDB = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    console.log(process.env.mongooseURL);
    const db = await mongoose.connect(mongooseURL);
    // const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;

    console.log(connection);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;