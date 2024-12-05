import { model, Schema } from "mongoose";
import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.model';


const academicDepartmentSchema=new Schema <TAcademicDepartment>(

    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        AcademicFaculty:{
            type:Schema.Types. ObjectId,
            ref:'AcademicFaculty',
        }

    },
    {
        timestamps:true,
    },
);
export const AcademicDepartment=model<TAcademicDepartment>(
    'AcademicDepartment',
    academicDepartmentSchema
)