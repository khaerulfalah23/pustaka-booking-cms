'use client';

import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  const pathname = usePathname();
  const route = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    route.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        'w-full flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20',
        isActive &&
          'text-primary bg-primary/20 hover:bg-primary/10 hover:text-primary'
      )}
    >
      <div className="flex items-center gap-x-2 py-2">
        <Icon
          size={18}
          className={cn('text-slate-500', isActive && 'text-primary')}
        />
        {label}
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-primary h-10 transition-all',
          isActive && 'opacity-100'
        )}
      />
    </button>
  );
}
