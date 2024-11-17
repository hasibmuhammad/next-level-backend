import { Request, Response } from "express";
import { User } from "../../models/user.models";
import { ApiResponse } from "../../utils/apiResponse";

export const getAllUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const data = await User.find();
  res.send(new ApiResponse(200, data, "Successfully fetched all users!"));
};

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const user = new User(await req.body);
  await user.save();
  res.send(new ApiResponse(201, user, "Successfully created the user!"));
};
