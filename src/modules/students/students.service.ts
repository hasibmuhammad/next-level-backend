import mongoose from "mongoose";
import { IStudentInfo } from "./students.interface";
import { studentModel } from "./students.model";

const createStudentIntoDB = async (student: IStudentInfo) => {
    const result = await studentModel.create(student);
    return result;
}

const getStudentsFromDB = async () => {
    const allStudents = await studentModel.find();
    const aggregatedData = await studentModel.aggregate([
        // stage - 1
        { $match: {} },
        { $group: { _id: null, "totalStudents": { $sum: 1 } } },
    ])
    return { students: allStudents, totalStudents: aggregatedData[0].totalStudents };
}

const getStudentByIdFromDB = async (id: string) => {
    const result = await studentModel.findOne({ _id: new mongoose.Types.ObjectId(id) })
    return result;
}

export const studentServices = { createStudentIntoDB, getStudentsFromDB, getStudentByIdFromDB }