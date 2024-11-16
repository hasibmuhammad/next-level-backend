import cors from "cors";
import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/users";
import postRotuer from "./routes/posts";

const app = express();

// middlewares and parsers
app.use(express.json({ limit: "16kb" }));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRotuer);

export default app;
