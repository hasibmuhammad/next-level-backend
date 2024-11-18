import mongoose from "mongoose";
import { IPostsInfo } from "./posts.interface";
import { postsModel } from "./posts.model";

const insertPostIntoDB = async (post: IPostsInfo) => {
    const result = await postsModel.create(post);
    return result;
}

const getAllPostsFromDB = async () => {
    const allPosts = await postsModel.find();
    const aggregatedData = await postsModel.aggregate([
        // stage - 1
        {
            $match: {}
        },
        // stage - 2
        {
            $group: { _id: null, "totalPosts": { $sum: 1 } }
        },
        // stage - 3
        {
            $project: { _id: 0 }
        }
    ]);
    return { posts: allPosts, totalPosts: aggregatedData[0].totalPosts };
}

const getPostByIdFromDB = async (id: string) => {
    const result = await postsModel.findById({ _id: new mongoose.Types.ObjectId(id) })
    return result;
}

export const postServices = { insertPostIntoDB, getAllPostsFromDB, getPostByIdFromDB };