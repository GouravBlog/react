import mongoose from "mongoose";

export function connectionDb() {
  try {
    mongoose.connect("mongodb://localhost:27017/user-managment");
    console.log("mongodb is connected");
  } catch (error) {
    console.log("mongodb is not connected");
  }
}
