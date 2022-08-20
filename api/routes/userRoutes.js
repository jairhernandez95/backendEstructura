import express from "express";
import { login, register } from "../controllers/userController.js";
import createUserMiddleware from "../middlewares/createUserMiddleware.js";
import loginUserMiddleware from "../middlewares/loginUserMiddleware.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUserMiddleware, register);
userRoutes.post("/login", loginUserMiddleware, login);

export default userRoutes;
