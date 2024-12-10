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
router.get('/:id',CourseControllers.getSingleCourse)
