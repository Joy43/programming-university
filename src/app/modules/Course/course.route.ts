import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './couse.controller';

const router=express.Router()
// ---------post course--------
router.post(
    '/create-course',
  
    validateRequest(
      CourseValidations.createCourseValidationSchema),
      CourseControllers.createCourse
  
)
// ----------single couse--------
router.get('/:id',CourseControllers.getSingleCourse)
// ----------getsingle course-------------
router.get('/',CourseControllers.getAllCourses)
// ---------delete-----
router.delete('/:id',CourseControllers.deleteCourse)
// ---------- put method------
router.put('/:courseId/assing-faculties',
  validateRequest(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.updateCourse
)
// course update
router.patch(
  '/:id',
  validateRequest(
    CourseValidations.updateCourseValidationSchema,

  ),
  CourseControllers.updateCourse
)

export const CourseRouter=router;