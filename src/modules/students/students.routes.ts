import express from 'express';
import { studentController } from './students.controller';

const router = express.Router();

router.post("/create-student", studentController.createStudent);
router.get("/", studentController.getStudents)
router.get("/:id", studentController.getStudentById)

export const studentRouter = router;