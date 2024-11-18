import cookieParser from "cookie-parser";
import cors from "cors";
import express, { urlencoded } from 'express';
import { postRouter } from "./modules/posts/posts.routes";
import { studentRouter } from "./modules/students/students.routes";

const app = express();

// middleware
app.use(express.json({ limit: "16kb" }));
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// routes
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/posts", postRouter);

export default app;

