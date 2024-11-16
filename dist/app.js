"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./routes/users"));
const posts_1 = __importDefault(require("./routes/posts"));
const app = (0, express_1.default)();
// middlewares and parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use("/api/v1/users", users_1.default);
app.use("/api/v1/posts", posts_1.default);
exports.default = app;
