import mongoose from "mongoose";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB= async (student:IStudent )=>{
    const result = await Student.create(student)
    return result
}

export const StudentService={
    createStudentIntoDB
}
