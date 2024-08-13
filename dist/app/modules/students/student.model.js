"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const UserNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    midlleName: { type: String, required: [true, 'midlle finger is missing dude'] },
    lastName: { type: String, required: true },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: {
        type: UserNameSchema,
        required: [true, 'Name is required'],
    },
    email: { type: String, required: true, unique: true },
    gender: {
        type: String,
        enum: {
            values: ["male", "female"],
            message: ' {VALUE} this is not valid value for gender'
        },
        default: 'male',
    },
    dateOfBirth: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    contackNo: { type: String, required: true },
    emergencyContack: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        fatherContackNo: { type: String, required: true },
        fatherOcupation: { type: String, required: true },
        fatherName: { type: String, required: true },
        motherContackNo: { type: String, required: true },
        motherOcupation: { type: String, required: true },
        motherName: { type: String, required: true },
    },
    localGuardian: {
        name: { type: String, required: true },
        ocupation: { type: String, required: true },
        contackNo: { type: String, required: true },
    },
    profileImg: { type: String, required: true },
    isActive: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
});
exports.Student = (0, mongoose_1.model)("student", studentSchema);
