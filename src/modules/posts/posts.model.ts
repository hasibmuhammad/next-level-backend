import mongoose from "mongoose";
import { IPostsInfo } from "./posts.interface";

const postSchema = new mongoose.Schema<IPostsInfo>({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export const postsModel = mongoose.model("Post", postSchema);