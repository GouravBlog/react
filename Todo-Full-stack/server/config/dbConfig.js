import mongoose from "mongoose";

export const connectionDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/todo-app");
        console.log('mongodb is connected');
    } catch (error) {
        console.log(error);
        console.log("Mongodb is not connect");
    }
}