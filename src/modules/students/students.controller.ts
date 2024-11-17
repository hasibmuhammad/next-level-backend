import { Request, Response } from "express";
import { studentServices } from "./students.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const newStudent = req.body;
        const result = await studentServices.createStudentIntoDB(newStudent);
        res.status(200).json({ success: true, message: "Successfully created the student", data: result });
    } catch (error) {
        console.error("Error: Error creating student!", error);
    }
}

const getStudents = async (_req: Request, res: Response) => {
    try {
        const students = await studentServices.getStudentsFromDB();
        res.status(200).json({ success: true, message: "Successfully fetched all students!", data: students });
    } catch (error) {
        console.log("Error fetching data drom db!", error);
    }

}

const getStudentById = async (req: Request, res: Response) => {
    try {
        const students = await studentServices.getStudentByIdFromDB(req.params.id);
        res.status(200).json({ success: true, message: "Successfully fetched the student!", data: students });
    } catch (error) {
        console.log("Error fetching data drom db!", error);
    }
}



export const studentController = { createStudent, getStudents, getStudentById }