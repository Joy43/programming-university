import { z } from "zod";

const loginValidationSchema=z.object({
    body:z.object({
        id:z.string({required_error:'id is required'}),
        password:z.string({required_error:'password is required'})
    })
});
const changePasswordValidationSchema = z.object({
    body: z.object({
      oldPassword: z.string({
        required_error: 'Old password is required',
      }),
      newPassword: z.string({ required_error: 'Password is required' }),
    }),
  });
  const refreshTokenValidationSchema = z.object({
    cookies: z.object({
      refreshToken: z.string({
        required_error: 'Refresh token is required!',
      }),
    }),
  });
// -----------forgetpasswordvalidationSchema
const forgetPasswordValidationSchema=z.object({
    body:z.object({
        id:z.string({
            required_error:'user id is required',
        })
    })
})
export const AuthVaidation={
    loginValidationSchema,
    forgetPasswordValidationSchema,
    refreshTokenValidationSchema,
    changePasswordValidationSchema
}