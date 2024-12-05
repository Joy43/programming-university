import { z } from "zod";

// ----------create validation -------------
const crateAcademicDepartmentValidationSchema=z.object({
    body:z.object({
        name:z.string({
            invalid_type_error:'Academic Department must be string',
            required_error:'Name is required'

        }),
        AcademicFaculty:z.string({
            invalid_type_error:'Academic faculty must be string',
            required_error:'Faculty is required'
        })
    })

});
// --------- update validation----------
const updateAcademicDepartmentValidationSchema=z.object({
    body:z.object({
name:z.string({
    invalid_type_error:'Academic Department must be string'
}).optional(),
AcademicFaculty:z.string({
    invalid_type_error:'Academic faculty must be string',
    required_error:'Faculty is required'
}).optional(),
    })
})
export const DepartmentValidation=({
    updateAcademicDepartmentValidationSchema,
    crateAcademicDepartmentValidationSchema  
})