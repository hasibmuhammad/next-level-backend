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
exports.studentController = void 0;
const students_service_1 = require("./students.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newStudent = req.body;
        const result = yield students_service_1.studentServices.createStudentIntoDB(newStudent);
        res.status(200).json({ success: true, message: "Successfully created the student", data: result });
    }
    catch (error) {
        console.error("Error: Error creating student!", error);
    }
});
const getStudents = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield students_service_1.studentServices.getStudentsFromDB();
        res.status(200).json({ success: true, message: "Successfully fetched all students!", data: students });
    }
    catch (error) {
        console.log("Error fetching data drom db!", error);
    }
});
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield students_service_1.studentServices.getStudentByIdFromDB(req.params.id);
        res.status(200).json({ success: true, message: "Successfully fetched the student!", data: students });
    }
    catch (error) {
        console.log("Error fetching data drom db!", error);
    }
});
exports.studentController = { createStudent, getStudents, getStudentById };
