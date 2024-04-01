import { SidebarLogo, SidebarRoutes } from '@/components/molecules';

export function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <SidebarLogo />
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}
