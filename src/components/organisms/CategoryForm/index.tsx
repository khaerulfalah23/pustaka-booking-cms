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
import { useRouter } from 'next/navigation';

export function CategoryForm({ form, onSubmit }: any) {
  const router = useRouter();
  const { isSubmitting } = form.formState;

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
