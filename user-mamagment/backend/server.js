import express from "express";
const app = express();
const port = 2000;
import { connectionDb } from "./db/Config.js";
import userRouter from "./Routes/user.routes.js";
import cors from "cors";

// Middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Hello Express Server</h1>")
});

app.use("/api/", userRouter);


app.listen(port, () => {
    console.log(`server is running at port no. ${port}`);
});

connectionDb();



