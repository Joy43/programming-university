import QueryBuilder from "../../../builder/QueryBuilder";
import { CourseSearchandleFields } from "./course.constant";
import { TCourse } from "./course.interface";
import { Course } from './course.model';
// ---------crate course------

const createCourseFromDB=async (body:any)=>{
    const result=await Course.create(body);
    return result;

};
// --------get all couse---------
const getAllCoursesFromDB = async (query: Record<string, unknown>) => {
    const courseQuery = new QueryBuilder(
        Course.find().populate('preRequisiteCourses.course'),
        query
    )
        .search(CourseSearchandleFields)
        .filter()
        .sort()
        .paginate()
        .fields();

    const result = await courseQuery.modelQuery; // modelQuery now works correctly
    return result;
};


// =-----------get single course--------
const getSingleCourseFromDB=async(id:string)=>{
    const result=await Course.findById(id)
    return result;
}

// ---------- update-------
const updateCourseIntoDB = async (id: string, payload: Partial<TCourse>) => {
    const { preRequisiteCourses, ...CourseRemainingData } = payload;

    // Step 1: Basic course info update
    const updateBasicCourseInfo = await Course.findByIdAndUpdate(
        id,
        CourseRemainingData,
        {
            new: true,
            runValidators: true,
        }
    );

    // Step 2: Check if there is any pre-requisite course to update
    if (preRequisiteCourses && preRequisiteCourses.length > 0) {
        const deletedPreRequisites = preRequisiteCourses
        .filter((el) => el.course && el.isDeleted)
        .map((el) => el.course);

        const deletedPreRequisitedCourses = await Course.findByIdAndUpdate(id, {
            $pull: { preRequisiteCourses: { Course: { $in: deletedPreRequisites } } },
        });

        // Step 3: Filter out the new course fields
        const newPreRequisites = preRequisiteCourses?.filter((el) => el.course && !el.isDeleted);

        const newPreRequisiteCourse = await Course.findByIdAndUpdate(
            id,
            {
                $addToSet: {
                    preRequisiteCourses: { $each: newPreRequisites },
                },
            }
        );

        const result = await Course.findById(id).populate('preRequisiteCourses');

        return {
            updateBasicCourseInfo,
            deletedPreRequisitedCourses,
            newPreRequisiteCourse,

            result,
        };
    }
};

// ----delete course--------

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
    getAllCoursesFromDB,
    getSingleCourseFromDB,
    deleteCourseIntoDB,
    updateCourseIntoDB

}