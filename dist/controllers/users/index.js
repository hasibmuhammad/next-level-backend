"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const user_models_1 = require("../../models/user.models");
const apiResponse_1 = require("../../utils/apiResponse");
const getAllUsers = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield user_models_1.User.find();
    res.send(new apiResponse_1.ApiResponse(200, data, "Successfully fetched all users!"));
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new user_models_1.User(yield req.body);
    yield user.save();
    res.send(new apiResponse_1.ApiResponse(201, user, "Successfully created the user!"));
});
exports.createUser = createUser;
