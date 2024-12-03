import httpStatus from 'http-status';

import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';

import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';

const  createAcademicsSemester= catchAsync(
  async (
    req,
    res,
    next,
  ) => {
   
    //   const { password, student: studentData } = req.body;
  
      // const zodParsedData = studentValidationSchema.parse(studentData);
  
    //   const result = await UserServices.createStudentIntoDB(
    //     password,
    //     studentData,
    //   );
  
    const result=await  AcademicSemesterServices.createAcademicSemesterIntoDB(
        req.body
    )
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic semester is created succesfully',
        data: result,
      });
   
  }
)

const SingleAcademicSemester=catchAsync(
  async(req,res,next)=>{
    
  }
)
export const  AcademicsSemesterControllers = {
    createAcademicsSemester,
};