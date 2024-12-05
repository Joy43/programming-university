import { Types } from 'mongoose';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.model';
export type TAcademicDepartment={
    name:string,
    AcademicFaculty:Types.ObjectId;
}