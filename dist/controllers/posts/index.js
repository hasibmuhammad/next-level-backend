"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPost = exports.getAllPosts = void 0;
const getAllPosts = (_req, res) => {
    res.json({
        success: true,
        message: "All posts fetched successfully",
        data: [
            {
                title: "This is a new post",
                description: "Lorem ipsum donor isont ond iso beal kjkdjfkd",
                author: "hasib",
            },
            {
                title: "This is another post",
                description: "Lorem ipsum donor isont ond iso beal kjkdjfkd",
                author: "shuvo",
            },
        ],
    });
};
exports.getAllPosts = getAllPosts;
const createPost = (req, res) => {
    const post = req.body;
    res.status(201).json({
        success: true,
        message: "Created post successfully",
        data: [
            {
                title: "This is a new post",
                description: "Lorem ipsum donor isont ond iso beal kjkdjfkd",
                author: "hasib",
            },
            {
                title: "This is another post",
                description: "Lorem ipsum donor isont ond iso beal kjkdjfkd",
                author: "shuvo",
            },
            post,
        ],
    });
};
exports.createPost = createPost;
