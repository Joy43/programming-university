import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentControllers } from './academicDepartment.controller';

const router=express.Router();
// ---------academic post method------
router.post('/create-academic-department',
    validateRequest(
        AcademicDepartmentValidation.crateAcademicDepartmentValidationSchema,

    ),
    AcademicDepartmentControllers.createAcademicDepartment,
)
// ---------get department------
router.get(
    '/:departmentId',
    AcademicDepartmentControllers.getSingleAcademicDepartment,
)
router.patch(
    '/',
    validateRequest(
        AcademicDepartmentValidation.updateAcademicDepartmentValidationSchema,

    ),
    AcademicDepartmentControllers.updateAcademicDeartment,
)
// --------getall department---------

router.get('/',AcademicDepartmentControllers.getAllAcademicDepartments)
export const AcademicdepartmentRouter=router;