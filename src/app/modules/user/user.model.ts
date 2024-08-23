import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userScema = new Schema<TUser>({
    _id :{
        type :String,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    needsPasswordChange : {type : Boolean , default : true},
    role : {type : String, enum :['admin', 'student', 'faculty']},
    status :{type : String , enum : ['in-progress', 'blocked'] },
    isDelated :{type : Boolean , }
},
{
    timestamps :true
})

export const userModal = model<TUser>('user', userScema)