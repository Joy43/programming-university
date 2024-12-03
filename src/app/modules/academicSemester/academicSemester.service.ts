
import { academicSemesterNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemesterCode, TAcademicSemseter } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemseter) => {
    // semester name --> semester code
    // academicSemesterNameCodeMapper['Fall']
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
      throw new Error('Invalid Semester Code');
    }
  
    const result = await AcademicSemester.create(payload);
    return result;
  };
  
export const AcademicSemesterServices={
    createAcademicSemesterIntoDB,
}