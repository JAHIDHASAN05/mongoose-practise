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
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body.student;
        console.log(student);
        const result = yield student_service_1.StudentService.createStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: 'student is created succesfully',
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentService.getAllStudentFromDB();
        res.status(200).json({
            sucess: true,
            message: 'Students are retrieve succesfully',
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const StudentId = req.params.StudentId;
        const result = yield student_service_1.StudentService.getSingleStudentFromDB(StudentId);
        res.status(200).json({
            success: true,
            message: 'student is retrieve succesfully',
            data: result
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudent,
};
