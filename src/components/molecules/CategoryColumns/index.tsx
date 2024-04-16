'use client';

import { Button } from '@/components/atoms';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, Pencil, Trash2 } from 'lucide-react';

export type Category = {
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
      const payment = row.original;
      return (
        <div className="flex items-center justify-center gap-2">
          <Button size={'sm'}>
            <Pencil size={20} />
          </Button>
          <Button size={'sm'} variant={'destructive'}>
            <Trash2 size={20} />
          </Button>
        </div>
      );
    },
  },
];