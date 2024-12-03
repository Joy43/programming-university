import express from 'express';
import { AcademicsSemesterControllers } from './academic.Semester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemestervalidations } from './academicSemester.validation';
const router=express.Router()
router.get('/')
router.post(
    '/create-academic-semester',
    validateRequest(
      AcademicSemestervalidations.createAcdemicSemesterValidationSchema,
    ),
    AcademicsSemesterControllers.createAcademicsSemester,
  );

export const AcademicSemesterRouters=router;