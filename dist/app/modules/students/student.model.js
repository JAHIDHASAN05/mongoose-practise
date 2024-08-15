"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const UserNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required.']
    },
    midlleName: {
        type: String,
        required: [true, 'Middle name is required.']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required.']
    },
});
const studentSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: [true, 'Student ID is required.'],
        unique: true
    },
    name: {
        type: UserNameSchema,
        required: [true, 'Student name is required.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female"],
            message: '{VALUE} is not a valid gender. Please choose either "male" or "female".'
        },
        default: 'male',
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Date of Birth is required.']
    },
    bloodGroup: {
        type: String,
        required: [true, 'Blood group is required.']
    },
    contackNo: {
        type: String,
        required: [true, 'Contact number is required.']
    },
    emergencyContack: {
        type: String,
        required: [true, 'Emergency contact number is required.']
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required.']
    },
    permanentAddress: {
        type: String,
        required: [true, 'Permanent address is required.']
    },
    guardian: {
        fatherContackNo: {
            type: String,
            required: [true, 'Father\'s contact number is required.']
        },
        fatherOcupation: {
            type: String,
            required: [true, 'Father\'s occupation is required.']
        },
        fatherName: {
            type: String,
            required: [true, 'Father\'s name is required.']
        },
        motherContackNo: {
            type: String,
            required: [true, 'Mother\'s contact number is required.']
        },
        motherOcupation: {
            type: String,
            required: [true, 'Mother\'s occupation is required.']
        },
        motherName: {
            type: String,
            required: [true, 'Mother\'s name is required.']
        },
    },
    localGuardian: {
        name: {
            type: String,
            required: [true, 'Local guardian\'s name is required.']
        },
        ocupation: {
            type: String,
            required: [true, 'Local guardian\'s occupation is required.']
        },
        contackNo: {
            type: String,
            required: [true, 'Local guardian\'s contact number is required.']
        },
    },
    profileImg: {
        type: String,
        required: [true, 'Profile image is required.']
    },
    isActive: {
        type: String,
        enum: {
            values: ["active", "inactive"],
            message: '{VALUE} is not valid . please try active or inactive'
        },
        default: "active",
    },
});
exports.Student = (0, mongoose_1.model)("student", studentSchema);
