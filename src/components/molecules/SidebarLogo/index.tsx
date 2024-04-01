import { Separator } from '@/components/atoms';
import { BookCopy } from 'lucide-react';

export function SidebarLogo() {
  return (
    <div className="px-6 pt-4 w-full text-primary flex flex-col items-center gap-x-2">
      <div className="flex gap-x-3 items-center w-full">
        <BookCopy size={36} />
        <h1 className="text-sm font-bold uppercase">
          Pustaka <br /> Booking
        </h1>
      </div>
      <Separator className="my-3" />
    </div>
  );
}
