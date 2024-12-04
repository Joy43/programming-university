
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
  // -------get singleacademicsemester-------------
  const getSingleAcademicSemesterFromDB=async(id:string)=>{
    const result=await AcademicSemester.find();
    return result;
  };
  // --------get all AcademicSemester ---------
  const getAllAcademicSemestersFromDB = async () => {
    const result = await AcademicSemester.find();
    return result;
  };
  // ------uodate--------
  const updateAcademicSemesterintoDB=async(
    id:string,
    payload:Partial<TAcademicSemseter>,

  )=>{
    if(
      payload.name && payload.code && academicSemesterNameCodeMapper[payload.name]!==payload.code
    ){
      throw new Error('Invalid semester code')
    }
    const result=await AcademicSemester.findOneAndUpdate({_id:id},payload,{
      new:true
    })
    return result;
  };
export const AcademicSemesterServices={
    createAcademicSemesterIntoDB,
    getSingleAcademicSemesterFromDB,
    getAllAcademicSemestersFromDB,
    updateAcademicSemesterintoDB,
}