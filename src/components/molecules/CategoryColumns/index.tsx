'use client';

import { Button } from '@/components/atoms';
import { DeleteCategory } from '@/components/organisms';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil } from 'lucide-react';
import Link from 'next/link';

type Category = {
  id: string;
  category: string;
};

export const CategoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: 'id',
    header: () => {
      return (
        <div className="w-full flex justify-center">
          <span>No</span>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className="w-full flex justify-center">{row.index + 1}</div>;
    },
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="Capitalize ml-4">{row.getValue('category')}</div>
    ),
  },
  {
    id: 'actions',
    header: () => <span className="flex justify-center">Actions</span>,
    cell: ({ row }) => {
      const categoryId = row.original.id;
      return (
        <div className="flex items-center justify-center gap-2">
          <Link href={`/category/edit/${categoryId}`}>
            <Button size={'sm'}>
              <Pencil size={20} />
            </Button>
          </Link>
          <DeleteCategory categoryId={categoryId} />
        </div>
      );
    },
  },
];
