import { Request, Response } from "express";

export const getAllPosts = (_req: Request, res: Response) => {
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

export const createPost = (req: Request, res: Response) => {
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
