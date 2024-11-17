"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = __importDefault(require("express"));
const students_controller_1 = require("./students.controller");
const router = express_1.default.Router();
router.post("/create-student", students_controller_1.studentController.createStudent);
router.get("/", students_controller_1.studentController.getStudents);
router.get("/:id", students_controller_1.studentController.getStudentById);
exports.studentRouter = router;
