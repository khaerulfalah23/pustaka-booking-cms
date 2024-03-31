'use client';

import { Button, Input } from '@/components/atoms';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/molecules';
import { signUpFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SignUpPage = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = async (val: z.infer<typeof signUpFormSchema>) => {
    console.log(val);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="rounded-xl border bg-card text-card-foreground shadow p-5">
          <div className="font-semibold text-center text-2xl mb-2">Sign Up</div>
          <div className="text-sm text-gray-500">
            Enter your data to create your account
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-5"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your name..." {...field} />
                    </FormControl>
                    <FormMessage className="pl-3" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email..." {...field} />
                    </FormControl>
                    <FormMessage className="pl-3" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="pl-3" />
                  </FormItem>
                )}
              />
              <Button className=" w-full">Sign Up</Button>
              <div className="text-sm">
                Already have an account{' '}
                <Link href="/signin" className="text-primary">
                  Sign In
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
