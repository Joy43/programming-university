import httpStatus from 'http-status-codes';

import { NextFunction, Request, RequestHandler, Response } from 'express';
import sendResponse from '../../utils/sendResponse';

import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.service';
// ----------create  semester------
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
// -------getsingle-------------
const getSingleAcademicSemester=catchAsync(
  async(req,res,next)=>{
    const {semesterId}=req.params;
    const result=await AcademicSemesterServices.getSingleAcademicSemesterFromDB(semesterId);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is retrieved succesfully',
      data: result,
    });
  }
)
// -------get all---

const getAllacademicSemester=catchAsync(
  async(req,res)=>{
    const result=await AcademicSemesterServices.getAllAcademicSemestersFromDB();
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'getallacademicsemester sucessful',
      data:true,
    })
  }
)
// --------update--------
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterintoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is retrieved succesfully',
    data: result,
  });
});
export const  AcademicsSemesterControllers = {
    createAcademicsSemester,
    getSingleAcademicSemester,
    getAllacademicSemester,
    updateAcademicSemester
};