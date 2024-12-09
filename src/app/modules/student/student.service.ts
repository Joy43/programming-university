import mongoose from 'mongoose';
import { Student } from './student.model';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import httpStatus from 'http-status-codes';
import { TStudent } from './student.interface';
import { query } from 'express';
// --get all student services----------
const getAllStudentsFromDB = async () => {

  const searchQuery=Student.find({
    $or:studentSeachableFields.map((field)=>({
      [field]:{$regex:seachTerm,$options:'i'},
    }))
  })
  // 
  const studentSearchableFieds=['email','name.firstName','presentAddress'];
  let searchTerm='';
  if(query?.searchTerm){
    searchTerm=query?.searchTerm as string;
  }

  // 
  const result = await Student.find()
  .populate('admissionSemester')
  .populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty'
    }
  })
  return result;
};
// get single student--------
const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id)
  .populate('admissionSemester')
  .populate({
    path:'academicDepartment',
    populate:{
      path:'academicFaculty'
    }
  })
  return result;
};
// ------------update logic---------
const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  /*
    guardain: {
      fatherOccupation:"Teacher"
    }

    guardian.fatherOccupation = Teacher

    name.firstName = 'Mezba'
    name.lastName = 'Abedin'
  */

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(modifiedUpdatedData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};
// -----------delete student serveice----------
const deleteStudentFromDB = async (id: string) => {
  const session=await mongoose.startSession()
try{
  session.startTransaction()
  const deletedStuent = await Student.updateOne(
    { id },
     { isDeleted: true },
     {new:true,session}
    
    );
    if(!deletedStuent){
throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete stuent');
    }
    // --------user--------
    const deletedUser=await User.findOneAndUpdate(
      {id},
      {isDeleted:true},
      {new:true,session}
    );
    if(!deletedUser){
      throw new AppError(httpStatus.BAD_REQUEST,'Failed to delete stuent');
          }
          await session.commitTransaction()
          await session.endSession()
  return deletedStuent;

}catch(err){
  await session.abortTransaction()
  await session.endSession()

}
  

}
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
  updateStudentIntoDB
};