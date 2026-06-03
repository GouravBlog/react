import express from "express";
import { createUser, deleteUser, getSingleUser, getusers, updateUser } from "../Controllers/user.controller.js";
const router = express.Router();

router.route("/create-user").post(createUser);
router.route("/users").get(getusers);
router.route("/user/:id").get(getSingleUser);
router.route("/user/:id").put(updateUser);
router.route("/user/:id").delete(deleteUser);


export default router;