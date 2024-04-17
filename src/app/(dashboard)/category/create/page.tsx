'use client';

import { categoryFormSchema } from '@/lib/form-schema';
import { CategoryForm } from '@/components/organisms';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const CreateCategoryPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof categoryFormSchema>>({
    resolver: zodResolver(categoryFormSchema),
  });

  const onSubmit = async (val: z.infer<typeof categoryFormSchema>) => {
    const loadingToast = toast.loading('Saving...');
    try {
      const body = {
        category: val.category,
      };

      await fetch('/api/category', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

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
    <div className="max-w-md mx-auto mt-5 md:mt-10 p-6">
      <h1 className="text-2xl text-center">Add Category</h1>
      <CategoryForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default CreateCategoryPage;
