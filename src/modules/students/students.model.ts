import mongoose from "mongoose";
import { IStudentInfo } from "./students.interface";

const studentSchema = new mongoose.Schema<IStudentInfo>({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    isActive: {
        type: String,
        enum: ["active", "inactive"],
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "B+", "O+", "AB+", "AB-"],
    },
    contactNo: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
    },
    guaridanInfo: {
        fatherName: {
            type: String,
            required: true,
            trim: true
        },
        occupation: {
            type: String,
            required: true,
            trim: true
        },
        contactNo: {
            type: String,
            required: true,
            trim: true
        }
    }
}, { timestamps: true });

export const studentModel = mongoose.model("Student", studentSchema);