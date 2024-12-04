import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemestervalidations } from './academicSemester.validation';
import { AcademicsSemesterControllers } from './academic.Semester.controller';


const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    AcademicSemestervalidations.createAcdemicSemesterValidationSchema,
  ),
  AcademicsSemesterControllers.createAcademicsSemester,
);

router.get(
  '/:semesterId',
  AcademicsSemesterControllers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    AcademicSemestervalidations.updateAcademicSemesterValidationSchema, 
  ),
  AcademicsSemesterControllers.updateAcademicSemester,
);

router.get('/', AcademicsSemesterControllers.getAllacademicSemester);

export const AcademicSemesterRoutes = router;