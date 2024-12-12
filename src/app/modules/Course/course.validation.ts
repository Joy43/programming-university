import { optional, z } from "zod";



const PreRequisteCourseValidationSchema=z.object({
    Course:z.string(),
    isDeleted:z.boolean().optional()
})
const createCourseValidationSchema=z.object({
    body:z.object({
        title:z.string().optional(),
        prefix:z.string().optional(),
        code:z.number().optional(),
        credits:z.number().optional(),
        preRequisteCourses:z
        .array(PreRequisteCourseValidationSchema).optional(),
        isDeleted:z
        .boolean().optional()

    }),

});

const updateStudentValidationSchema=createCourseValidationSchema.partial()

export const CourseValidations={
    createCourseValidationSchema,
    updateStudentValidationSchema
}