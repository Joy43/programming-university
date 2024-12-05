import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AcademicDepartmentServic } from "./academicDepartment.service";
import httpStatus from 'http-status-codes';


const createAcademicDepartment=catchAsync(async(req,res)=>{
    const result=await AcademicDepartmentServic.createAcademicDepartmentDB(req.body);
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'accademic department is created successfully',
        data: result,
    });
});
// ---get all
const getAllAcademicDepartments = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServic.getAllAcademicDepartmentFromDB;
  
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic departments are retrieved successfully',
      data: result,
    });
  });

// -------GET single
const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const { departmentId } = req.params;
    const result =
      await AcademicDepartmentServic.getSingleAcademicFacultyFromDB(
        departmentId,
      );
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Academic department is retrieved succesfully',
        data: result,
      });
    })
    // ------update academic department---------
    const updateAcademicDeartment = catchAsync(async (req, res) => {
        const { departmentId } = req.params;
        const result =
          await AcademicDepartmentServic.updateAcademicDepartmentDB(
            departmentId,
            req.body,
          );
      
        sendResponse(res, {
          statusCode: httpStatus.OK,
          success: true,
          message: 'Academic department is updated succesfully',
          data: result,
        });
      });
      export const AcademicDepartmentControllers={
        createAcademicDepartment,
        getSingleAcademicDepartment,
        updateAcademicDeartment,
        getAllAcademicDepartments
      }