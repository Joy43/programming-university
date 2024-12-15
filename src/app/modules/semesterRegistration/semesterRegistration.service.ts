import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from "./semesterRegistration.interface";


const createSemesterRegistrationIntoDB=async(payload:TSemesterRegistration)=>{
    // -----------check----------
const academicSemester=payload?.academicSemester;
    if(payload?.academicSemester){
        const isAcademicSemesterExits=await AcademicSemester.findById(
            payload?.academicSemester,
        )
    }
}