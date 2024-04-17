'use client';

import { Button, Input } from '@/components/atoms';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/molecules';
import { categoryFormSchema } from '@/lib/form-schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export function AddCategoryForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (val: z.infer<typeof categoryFormSchema>) => {
    const loadingToast = toast.loading('Saving...');
    try {
      const body = {
        category: val.category,
      };

      const res = await fetch('/api/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        toast.error('Category already exist', {
          id: loadingToast,
        });
        return;
      }

      toast.success('Add category success', {
        id: loadingToast,
      });
      router.push('/category');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong', {
        id: loadingToast,
      });
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-5">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-3">Category</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your category..."
                  {...field}
                  autoFocus={true}
                />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
        <div className="flex justify-center gap-3">
          <Button
            onClick={() => router.push('/category')}
            type="button"
            variant="outline"
          >
            Cancel
          </Button>
          <Button disabled={isSubmitting}>Save</Button>
        </div>
      </form>
    </Form>
  );
}
