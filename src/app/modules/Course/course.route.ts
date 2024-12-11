import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseValidations } from './course.validation';
import { CourseControllers } from './couse.controller';
import { CourseService } from './course.service';
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
router.get('/',CourseControllers.getAllCoure)
// ---------delete-----
router.delete('/:id',CourseControllers.deleteCourse)

export const CourseRouter=router;