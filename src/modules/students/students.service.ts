import mongoose from "mongoose";
import { IStudentInfo } from "./students.interface";
import { studentModel } from "./students.model";

const createStudentIntoDB = async (student: IStudentInfo) => {
    const result = await studentModel.create(student);
    return result;
}

const getStudentsFromDB = async () => {
    const result = await studentModel.find();
    return result;
}

const getStudentByIdFromDB = async (id: string) => {
    const result = await studentModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
    return result;
}

export const studentServices = { createStudentIntoDB, getStudentsFromDB, getStudentByIdFromDB }