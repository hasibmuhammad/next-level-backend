import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response): void => {
  res.status(200).json({
    success: true,
    message: "Successfully fetched all users!",
    data: [
      { userName: "Shuvo", email: "shuvo@gmail.com", age: 24 },
      { userName: "Hasib", email: "hasib@gmail.com", age: 26 },
    ],
  });
};

export const createUser = (req: Request, res: Response) => {
  const user = req.body;
  res.status(201).json({
    success: true,
    message: "Created user successfully!",
    data: user,
  });
};
