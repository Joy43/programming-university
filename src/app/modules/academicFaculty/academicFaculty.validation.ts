import { z } from "zod";
// ---------create-------
const createAcademicFacultyValidationSchema=z.object({
    body:z.object({
        name:z
    .string({
        invalid_type_error:'Academic faculty must be string',

    })
    })
})

// update

const updateAcademicFacultyValidationSchema=z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:'Academic faculty must be string'
        }),
    }),
})

export const FacultyValitaion={
    createAcademicFacultyValidationSchema,
    updateAcademicFacultyValidationSchema
}