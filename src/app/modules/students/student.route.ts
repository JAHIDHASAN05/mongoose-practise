import express from 'express'
import { Student } from './student.model'
import { StudentController } from './student.controller'
const router= express.Router()

router.post('/create-student', StudentController.createStudent)
router.get('/',StudentController.getAllStudents)


export const StudentRoutes= router;