import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI environment variable is not defined");
}

const MONGODB_URI = process.env.MONGO_URI;

export const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB at:", MONGODB_URI);

    // Add connection event listeners
    mongoose.connection.on("connecting", () => {
      console.log("MongoDB connecting...");
    });

    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
