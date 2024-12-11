import httpStatus from 'http-status-codes';


import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseService } from './course.service';
// --------cteate course-------
const createCourse = catchAsync(async (req, res) => {
  const result = await CourseService.createCourseFromDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is created succesfully',
    data: result,
  });
});

const getAllCoure = catchAsync(async (req, res) => {
  const result = await CourseService.getAllCouseFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course are retrieved successfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await CourseService.getSingleCourseFromDB(facultyId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'course is retrieved succesfully',
    data: result,
  });
});
// ------------delete course----------
const deleteCourse =catchAsync (async (
    req,
    res,
    next,
  ) => {
  
      const { studentId } = req.params;
      const result = await CourseService.deleteCourseIntoDB(studentId);
  
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Student is deleted succesfully',
        data: result,
      });
    
  })

// const updateAcademicFaculty = catchAsync(async (req, res) => {
//   const { facultyId } = req.params;
//   const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(
//     facultyId,
//     req.body,
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic faculty is updated succesfully',
//     data: result,
//   });
// });

export const CourseControllers = {
 createCourse,
 getSingleCourse,
 getAllCoure,
 deleteCourse,
};