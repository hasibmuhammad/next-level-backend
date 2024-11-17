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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const students_model_1 = require("./students.model");
const createStudentIntoDB = (student) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield students_model_1.studentModel.create(student);
    return result;
});
const getStudentsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield students_model_1.studentModel.find();
    return result;
});
const getStudentByIdFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield students_model_1.studentModel.findOne({ _id: new mongoose_1.default.Types.ObjectId(id) });
    return result;
});
exports.studentServices = { createStudentIntoDB, getStudentsFromDB, getStudentByIdFromDB };
