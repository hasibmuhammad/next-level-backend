import dotenv from "dotenv";
import { Server } from "http";
import app from "./app";
import connectDB from "./config/db";
dotenv.config();

const port = process.env.PORT || 5001;

const bootstrap = async () => {
  const server: Server = app.listen(port, () => {
    console.log(`Your app is running on port ${port}`);
  });
};

connectDB()
  .then(() => {
    bootstrap();
  })
  .catch((error) => {
    console.error(error);
  });
