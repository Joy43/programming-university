import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacultyValitaion } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';
import { AcademicSemestervalidations } from '../academicSemester/academicSemester.validation';

const router=express.Router();
// --------create faculty--------------
router.post(
    '/create-academic-faceulty',
    validateRequest(
      FacultyValitaion.createAcademicFacultyValidationSchema
    ),
    AcademicFacultyControllers.createAcademicFaculty,
);
// ---------get all faculty--------
router.get(
  '/:facultyId',
  AcademicFacultyControllers.getAllAcademicFaculties,
);
// ---------get single faculty--------
router.get('/',AcademicFacultyControllers.getSingleAcademicFaculty);
// --------update faculty----------
router.patch(

 '/:facultyId',
 validateRequest(
  AcademicSemestervalidations.
  updateAcademicSemesterValidationSchema,
 ),
 AcademicFacultyControllers.updateAcademicFaculty,
)
export const AcademicFacultyRoutes=router;
