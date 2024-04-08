'use client';

import { DropdownMenuItem, DropdownMenuShortcut } from '@/components/molecules';
import { useRouter } from 'next/navigation';

type navbarLinkProps = {
  title: string;
  shortcut: string;
  icon: JSX.Element;
};

export function NavbarLink({ title, shortcut, icon }: navbarLinkProps) {
  const route = useRouter();
  return (
    <DropdownMenuItem
      onClick={() => route.push('/profile')}
      className="cursor-pointer"
    >
      {icon}
      <span>{title}</span>
      <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}
