import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, Sidebar } from '..';

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
