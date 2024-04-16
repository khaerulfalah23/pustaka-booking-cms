import { z } from 'zod';

export const signUpFormSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }),
    email: z
      .string({ required_error: 'Email is required' })
      .email({ message: 'Email is not valid' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(4, { message: 'Password must be at least 4 characters' }),
    confirmPassword: z.string({
      required_error: 'Confirm password is required',
    }),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    }
  );

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Email is not valid' }),
  password: z.string({ required_error: 'Password is required' }),
});

export const profileFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string({ required_error: 'Email is required' })
    .email({ message: 'Email is not valid' }),
  image: z.any(),
});
