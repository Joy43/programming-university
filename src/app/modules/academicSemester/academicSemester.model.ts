import { model, Model, Schema, } from "mongoose";
import { TAcademicSemseter, TAcademicSemseterCode, TAcademicSemseterName, TMonth } from './academicSemester.interface';
import { AcademicSemesterCode, AcademicSemesterName, months } from "./academicSemester.constant";

const academicSemesterSchema=new Schema<TAcademicSemseter>(
    {
        name:{
            type:String,
            required:true,
            enum:AcademicSemesterName
        },
        year:{
            type:Date,
            required:true
        },
        code: {
            type: String,
            required: true,
            enum:AcademicSemesterCode
           
          },
          startMonth: {
            type: String,
            required: true,
            enum: months,
          },
          endMonth: {
            type: String,
            required: true,
            enum: months,
          },
        },
        {
          timestamps: true,
        },
    
);
export const AcademicSemester=model<TAcademicSemseter>(
'AcademicSemester',
academicSemesterSchema
)