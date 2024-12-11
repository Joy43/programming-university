import QueryBuilder from "../../../builder/QueryBuilder";
import { CourseSearchandleFields } from "./course.constant";
import { Course } from "./course.model"
// ---------crate course------

const createCourseFromDB=async (body:any)=>{
    const result=await Course.create(body);
    return result;

};
// --------get all couse---------
const getAllCouseFromDB=async(query:Record<string,unknown>)=>{
    const courseQuery=new QueryBuilder(Course.find().populate('preRequistiteCourses.course'),query)
    .search(CourseSearchandleFields)
    .filter()
    .sort()
    .paginate()
    .fileds();

    const result=await courseQuery.modelQuery;
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