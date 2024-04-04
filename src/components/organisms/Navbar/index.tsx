import { NavbarRoutes } from '@/components/molecules';
import MobileSidebar from '../MobileSidebar';

export function Navbar() {
  return (
    <div className="p-4 border-b h-full flex justify-between items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
}
