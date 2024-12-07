import { NextFunction, Request, RequestHandler, Response } from 'express';
import httpStatus from 'http-status-codes';
import sendResponse from '../../utils/sendResponse';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';
// -------------- try catch use code repid resume try & catch working resolve & catch work easy way------------
/* const catchAsync=(fn:RequestHandler)=>{
return(req:Request,res:Response,next:NextFunction)=>{
  Promise.resolve (fn (req,res,next)).catch((err)=>next(err));
}

}; */

//------------ single getSingleStudent----------------
const getSingleStudent=catchAsync(async (
  req,
  res,
  next,
) => {
 
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  })

  // -----get all student----------
const getAllStudents =catchAsync(async (
  req,
  res,
  next,
) => {
 
    const result = await StudentServices.getAllStudentsFromDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    });
 
}) 

// ------- Delete student---------
const deleteStudent =catchAsync (async (
  req,
  res,
  next,
) => {

    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  
})

// update student--------

const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated succesfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent
};