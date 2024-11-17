import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/db";
dotenv.config();

const port = process.env.PORT || 5001;

const bootstrap = async () => {
  connectDB();
  app.listen(port, () => {
    console.log(`Your app is running on port ${port}`);
  });
};

bootstrap();
