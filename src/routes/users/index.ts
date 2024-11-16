import express, { Request, Response } from "express";
import { createUser, getAllUsers } from "../../controllers/users";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

userRouter.post("/create-user", createUser);

export default userRouter;
