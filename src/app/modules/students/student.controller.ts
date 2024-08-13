import { Request, Response } from "express";
import { StudentService } from "./student.service";

const createStudent=async(req:Request, res:Response)=>{
try {
    const student = req.body.student; 
    console.log(student);
    const result =await StudentService.createStudentIntoDB(student)    
    res.status(200).json({
        success: true,
        message: 'student is created succesfully', 
        data: result
    })
} catch (error) {
    console.log(error);    
}}


const getAllStudents=async(req:Request, res:Response)=>{
 try {
    
    const result = await StudentService.getAllStudentFromDB()
    res.status(200).json({
        sucess: true,
        message: 'Students are retrieve succesfully',
        data: result
    })
    
 } catch (error) {

    console.log(error);
    
 }

}

const getSingleStudent=async(req:Request, res:Response)=>{
    try {

        const StudentId = req.params.StudentId
        const result = await StudentService.getSingleStudentFromDB(StudentId)

        res.status(200).json({
            success: true,
            message: 'student is retrieve succesfully',
            data: result
        })


        
        
    } catch (error) {
        console.log(error);
    }
}

export const StudentController={
    createStudent,
    getAllStudents,
    getSingleStudent,
}