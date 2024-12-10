import { Course } from "./course.model"
import request from 'express';

const createCourseFromDB=async (body: any)=>{
    const result=await Course.create();
    return result;

};
// --------get all couse---------
const getAllCouseFromDB=async()=>{
    const result=await Course.find();
    return result;
} 
// =-----------get single course--------
const getSingleCourseFromDB=async(id:string)=>{
    const result=await Course.findById(id)
    return result;
}

// ----update course--------


const deleteCourseIntoDB=async(id:string)=>{
    const result=await Course.findByIdAndUpdate(id,
        {
            isDelted:true
        },
        {
            new:true

        },

    )
    return result;
}
export const CourseService={
    createCourseFromDB,
    getAllCouseFromDB,
    getSingleCourseFromDB,
    deleteCourseIntoDB

}