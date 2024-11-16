import express from "express";
import { createPost, getAllPosts } from "../../controllers/posts";

const postRotuer = express.Router();

postRotuer.get("/", getAllPosts);
postRotuer.post("/create-post", createPost);

export default postRotuer;
