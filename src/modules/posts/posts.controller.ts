import { Request, Response } from "express";
import { postServices } from "./posts.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const post = req.body;
        const result = await postServices.insertPostIntoDB(post)
        res
            .status(201)
            .json({ success: true, message: "Post created successfully!", data: result })
    } catch (error) {
        console.error("Error creating post: ", error);
    }
}

const getAllposts = async (req: Request, res: Response) => {
    try {
        const result = await postServices.getAllPostsFromDB();
        res
            .status(200)
            .json({ success: true, message: "All Posts fetched successfully!", data: result })
    } catch (error) {
        console.error("Error fetching posts: ", error);
    }
}

const getPostById = async (req: Request, res: Response) => {
    try {
        const result = await postServices.getPostByIdFromDB(req.params.id);
        res
            .status(200)
            .json({ success: true, message: "Post fetched successfully!", data: result })
    } catch (error) {
        console.error("Error fetching post: ", error);
    }
}
export const postController = { createPost, getAllposts, getPostById };