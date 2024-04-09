'use client';

import { Button, Input } from '@/components/atoms';
import {
  CustomUpload,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/molecules';
import { supabaseDeleteFile, supabaseUploadFile } from '@/lib/supabase';
import { profileFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { User } from '@prisma/client';
import { FC } from 'react';
import { z } from 'zod';

interface ProfileFormProps {
  detail: User | null;
}

export const ProfileForm: FC<ProfileFormProps> = ({ detail }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof profileFormSchema>>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: detail?.name,
      email: detail?.email,
      image: detail?.image,
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (val: z.infer<typeof profileFormSchema>) => {
    const loadingToast = toast.loading('Saving...');
    try {
      let filename = '';

      if (typeof val.image === 'object') {
        const uploadImg = await supabaseUploadFile(val.image, 'profile');
        if (detail?.image && detail?.image !== 'default.svg') {
          await supabaseDeleteFile(detail?.image, 'profile');
        }
        filename = uploadImg.fileName;
      } else {
        filename = val.image;
      }

      const body = {
        ...val,
        image: filename,
      };

      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        toast.success('Edit profile success');
      } else {
        toast.error('Please try again');
      }

      router.refresh();
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.log(error);
    } finally {
      toast.dismiss(loadingToast);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-3">Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email..." {...field} readOnly />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-3">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name..." {...field} />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
        <CustomUpload form={form} name="image" />
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => router.push('/profile')}
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          <Button disabled={!isValid || isSubmitting}>Save</Button>
        </div>
      </form>
    </Form>
  );
};
