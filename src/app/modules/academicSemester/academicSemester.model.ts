import { model, Model, Schema, } from "mongoose";

import { AcademicSemesterCode, AcademicSemesterName, months } from "./academicSemester.constant";
import { TAcademicSemseter } from "./academicSemester.interface";

const academicSemesterSchema=new Schema<TAcademicSemseter>(
    {
        name:{
            type:String,
            required:true,
            enum:AcademicSemesterName
        },
        year:{
            type:String,
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
//  same year same name no repeat
academicSemesterSchema.pre('save',async function(next){
  const isSemesterExit=await AcademicSemester.findOne({
    year:this.year,
    name:this.name,
   
  })
  if(isSemesterExit){
    throw new Error('semester is already exits')
  }
})


export const AcademicSemester=model<TAcademicSemseter>(
'AcademicSemester',
academicSemesterSchema
)