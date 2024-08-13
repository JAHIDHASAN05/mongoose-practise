import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/students/student.route'

const app= express()
app.use(express.json())
app.use(cors())


app.use('/api/v1/student', StudentRoutes)

app.get('/', (req:Request, res:Response)=>{
        res.json({'jahid': "is mag rvr"})
})


export default app;






