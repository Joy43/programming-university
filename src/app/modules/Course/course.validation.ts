import { z } from "zod";
import { Course } from './course.model';

const PreRequisteCourseValidationSchema=z.object({
    Course:z.string(),
    isDeleted:z.boolean().optional()
})
const createCourseValidationSchema=z.object({
    body:z.object({
        title:z.string(),
        prefix:z.string(),
        code:z.number(),
        credits:z.number(),
        preRequisteCourses:z.array(PreRequisteCourseValidationSchema)

    }),

});
export const CourseValidations={
    createCourseValidationSchema
}