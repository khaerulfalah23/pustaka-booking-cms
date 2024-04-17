'use client';

import { Button } from '@/components/atoms';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/molecules';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { FC } from 'react';

interface DeleteCategoryProps {
  categoryId: string;
}

export const DeleteCategory: FC<DeleteCategoryProps> = ({ categoryId }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const loadingToast = toast.loading('Loading...');
    try {
      await fetch(`/api/category/${categoryId}`, {
        method: 'DELETE',
      });

      toast.success('Delete category success', {
        id: loadingToast,
      });

      router.refresh();
    } catch (error) {
      toast.error('Something went wrong', {
        id: loadingToast,
      });
      console.error(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size={'sm'} variant={'destructive'}>
          <Trash2 size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This action will permanently delete
            the category data and delete the category data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
