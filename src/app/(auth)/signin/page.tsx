'use client';

import { Button, Input } from '@/components/atoms';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/molecules';
import { signInFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SignInPage = () => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = async (val: z.infer<typeof signInFormSchema>) => {
    console.log(val);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-80">
        <div className="rounded-xl border bg-card text-card-foreground shadow p-5">
          <div className="font-semibold text-center text-2xl mb-2">Login</div>
          <div className="text-sm text-gray-500">
            Enter your email to gain access
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-5 space-y-5"
            >
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
              <Button className=" w-full">Sign In</Button>
              <div className="text-sm">
                Don`t have an account{' '}
                <Link href="/signup" className="text-primary">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
