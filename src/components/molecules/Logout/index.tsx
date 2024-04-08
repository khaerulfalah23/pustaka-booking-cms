'use client';

import { DropdownMenuItem, DropdownMenuShortcut } from '..';
import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export function Logout() {
  return (
    <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
}
