import { TAcademicSemseterCode } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB=async (payload:TAcademicSemseterCode,)=>{
    const result=await AcademicSemester.create(payload);
    return result;
};
export const AcademicSemesterServices={
    createAcademicSemesterIntoDB,
}