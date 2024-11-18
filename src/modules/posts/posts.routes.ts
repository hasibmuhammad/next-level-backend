import express from 'express';
import { postController } from './posts.controller';

const router = express.Router();

router.post("/create-post", postController.createPost);
router.get("/", postController.getAllposts);
router.get("/:id", postController.getPostById);

export const postRouter = router;