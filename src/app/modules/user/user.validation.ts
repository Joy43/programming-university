import { z } from 'zod';

// Define individual fields as schemas
const userValidationSchema=z.object({
    id : z.string({
      
    }),
    password :z.string({
      invalid_type_error:'password'
    }).max(20, {
      message: 'Password cannot be more than 20 characters',
    }),
    needsPasswordChange:z.boolean().optional().default(true),
    role:z.enum(['student','faculty','admin']),
    // status:z.enum(['in-progress','blocked'],).default('in-progress'),
    // isDeleted:z.boolean().optional().default(false),


})
export  const UserValidation={
    userValidationSchema,

}
