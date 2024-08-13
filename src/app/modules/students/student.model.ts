import { model, Schema } from "mongoose";
import { IStudent } from "./student.interface";




const studentSchema= new Schema<IStudent>({
    id:{type: String},
    name : {
        firstName :{type: String , required: true},
        midlleName: {type : String, required : true},
        lastName : {type : String, required: true}
    },
    email: {type : String},
    gender : {
        type :String,
        enum : ['male', 'female']
    },
    dateOfBirth:{type :String, required : true},
    bloodGroup: {type: String, required: true},
    contackNo: {type : String, required: true},
    emergencyContack: {type : String, required: true},
    presentAddress: {type : String, required: true},
    permanentAddress: {type : String , required: true},
    guardian : {
        fatherContackNo: {type :String , required : true},
        fatherOcupation: {type: String, required: true},
        fatherName: {type : String , required: true},
        motherContackNo: {type :String , required : true},
        motherOcupation: {type: String, required: true},
        motherName: {type : String , required: true},
    },
    localGuardian :{
        name :{type: String, required: true},
        ocupation : {type : String, required: true},
        contackNo : {type: String, required: true}
    },
    profileImg : {type : String, required: true},
    isActive : {
        type: String,
        enum: ['active', 'inactive'],
        default :'active'
    }

})


export const Student = model('student', studentSchema)