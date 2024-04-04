'use client';

import { Separator, SidebarItem, SidebarLabel } from '@/components/atoms';
import { menuRoutes } from './menu-rouutes';

export function SidebarRoutes() {
  return (
    <div className="flex flex-col w-full">
      {menuRoutes.map((route) => (
        <div key={route.label}>
          <SidebarLabel label={route.label} />
          {route.items.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              href={item.href}
            />
          ))}
          <Separator className="my-2 w-[85%] md:w-[80%] mx-auto" />
        </div>
      ))}
    </div>
  );
}
