"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = require("../../controllers/posts");
const postRotuer = express_1.default.Router();
postRotuer.get("/", posts_1.getAllPosts);
postRotuer.post("/create-post", posts_1.createPost);
exports.default = postRotuer;
