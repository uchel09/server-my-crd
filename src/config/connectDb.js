import mongoose from "mongoose";


const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/guitarchord");
    console.log("Connected successfully to MongoDB server");
  } catch (err) {
    console.log(`Error connecting to MongoDB: ${err}`);
  }
};

export default connectDB;
