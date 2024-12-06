import mongoose from "mongoose";
import config from "../../config";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./user.utils";
import AppError from "../../errors/AppError";
import httpStatus from 'http-status-codes';


const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {};

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  // find academic semester info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );

  //set  generated id
  const session=await mongoose.startSession()
  try{
    session.startTransaction()
    userData.id=generateStudentId(admissionSemester);

    // create a user
    const newUser = await User.create([userData],{session});
  
    //create a student
    if (!newUser.length) {
 throw new AppError(httpStatus.BAD_REQUEST,'Failded to create user')  }
  // --------set id, _id as user
  payload.id=newUser[0].id;
  payload.user=newUser[0]._id; //Referance _id
  // create a student (transaction-2)
      const newStudent = await Student.create([payload],{session});
      if(!newStudent){
        throw new AppError(httpStatus.BAD_REQUEST,'Failed to create new student')
      }
await session.commitTransaction()
await session.endSession()

      return newStudent;
  
  }catch (err){
await session.abortTransaction()
await session.endSession()
  }
 
};

export const UserServices = {
  createStudentIntoDB,
};