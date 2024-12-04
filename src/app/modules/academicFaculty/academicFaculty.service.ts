import { TAcademicFaculty } from "./academicFaculty.interface";
import { AcademicFaculty } from "./academicFaculty.model";
// ----------create academicFaculty----------
const createAcademicFacultyIntoDB=async (paylod:TAcademicFaculty)=>{
    const result=await AcademicFaculty.create(paylod);
    return result;
};
// -------get all faculty-----
const getAllAcademicFacultiesFromDB=async()=>{
    const result =await AcademicFaculty.find();
    result;
}
// -------get single faculty
const getSingleAcademicFacultyFromDB=async(id:string)=>{
    const result =await AcademicFaculty.findById(id);
    return result;
}
// --------update academicFaculty---------
const updateAcademicFacultyIntoDB = async (
    id: string,
    payload: Partial<TAcademicFaculty>,
  ) => {
    const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
      new: true,
    });
    return result;
  };
  export const AcademicFacultyServices = {
    createAcademicFacultyIntoDB,
    getAllAcademicFacultiesFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicFacultyIntoDB,
  };