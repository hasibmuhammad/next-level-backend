"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successfully fetched all users!",
        data: [
            { userName: "Shuvo", email: "shuvo@gmail.com", age: 24 },
            { userName: "Hasib", email: "hasib@gmail.com", age: 26 },
        ],
    });
};
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => {
    const user = req.body;
    res.status(201).json({
        success: true,
        message: "Created user successfully!",
        data: user,
    });
};
exports.createUser = createUser;
