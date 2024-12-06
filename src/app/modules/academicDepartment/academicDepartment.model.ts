import { model, Schema } from "mongoose";
import { TAcademicDepartment } from './academicDepartment.interface';

import AppError from "../../errors/AppError";
import httpStatus from 'http-status-codes';


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
academicDepartmentSchema.pre('save',async function (next) {
    const isDepartmentExit=await AcademicDepartment.findOne({
        name:this.name,
    })
    if(isDepartmentExit){
        throw new AppError(
            httpStatus.NOT_FOUND,
            'This department does not exit !'
        )
    }
    next();
    
});

academicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
    const query = this.getQuery();
    const isDepartmentExist = await AcademicDepartment.findOne(query);
  
    if (!isDepartmentExist) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'This department does not exist! ',
      );
    }
  
    next();
  });
  
export const AcademicDepartment=model<TAcademicDepartment>(
    'AcademicDepartment',
    academicDepartmentSchema
)