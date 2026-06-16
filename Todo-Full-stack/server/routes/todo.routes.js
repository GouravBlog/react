import express from "express";
import { createTodoController, getAllTodosController, getSingleTodoController } from "../controllers/createTodo.controller.js";
const router = express.Router();


router.route("/create-todo").post(createTodoController);
router.route("/get-allTodos").get(getAllTodosController);
router.route("/get-singleTodo/:id").get(getSingleTodoController);

export default router;