import express from "express";
const app = express();
const port = 5050;
import todoRoutes from "./routes/todo.routes.js";
import { connectionDB } from "./config/dbConfig.js";
import cors from "cors";

app.get("/", (req, res) => {
    res.send("Server ");
})

app.use(express.json());
app.use(cors());

// Routes Middlewares 
app.use("/api/v1/", todoRoutes);

app.listen(port, () => {
    connectionDB();
    console.log(`server is run at port no. ${port}`);
})