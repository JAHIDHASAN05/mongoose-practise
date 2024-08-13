import mongoose from "mongoose";
import { IStudent } from "./student.interface";
import { Student } from "./student.model";

const createStudentIntoDB= async (student:IStudent )=>{
    const result = await Student.create(student)
    return result
}

const getAllStudentFromDB =async()=>{
    const result = await Student.find()
    return result;
}

const getSingleStudentFromDB =async (StudentId:string)=>{
     const result = await Student.findOne({id:StudentId})
     return result

}

export const StudentService={
    createStudentIntoDB,
    getAllStudentFromDB,
    getSingleStudentFromDB
}
