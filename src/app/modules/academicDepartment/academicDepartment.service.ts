import { get } from "mongoose";
import { AcademicFaculty } from "../academicFaculty/academicFaculty.model";
import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from './academicDepartment.model';
// -----------create department--------
const createAcademicDepartmentDB=async(payload:TAcademicDepartment)=>{
    const result=await AcademicDepartment.create(payload);

    return result;
};
// ----------get all academic department--------------
const getAllAcademicDepartmentFromDB=async()=>{
    const result=await AcademicFaculty.find();
    return result;
}
// -----------get single academic department---------
const getSingleAcademicFacultyFromDB=async(id:string)=>{
    const result=await AcademicDepartment.findById(id);
    return result;
}
// ----update department----
const updateAcademicDepartmentDB=async(
    id:string,
    payload:Partial<TAcademicDepartment>,

)=>{
    const result=await AcademicDepartment.findOneAndUpdate(
        {_id:id},
        payload,
        {
            new:true,
        },

    );
    return result;
};
export const AcademicDepartmentServic={
    createAcademicDepartmentDB,
    getAllAcademicDepartmentFromDB,
    getSingleAcademicFacultyFromDB,
    updateAcademicDepartmentDB
}