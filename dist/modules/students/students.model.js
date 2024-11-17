"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
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
exports.studentModel = mongoose_1.default.model("Student", studentSchema);
