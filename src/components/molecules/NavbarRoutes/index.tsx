import { User } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  NavbarLink,
} from '@/components/atoms';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '..';
import { supabaseGetPublicUrl } from '@/lib/supabase';
import { getServerSession } from 'next-auth';
import { Logout } from '../Logout';
import authOptions from '@/app/api/auth/[...nextauth]/options';
import prisma from '../../../../lib/prisma';

export async function NavbarRoutes() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });

  const { publicUrl } = await supabaseGetPublicUrl(
    user?.image as string,
    'profile'
  );
  return (
    <div className="flex items-center gap-x-2 ml-auto">
      <h4 className="capitalize">Hello, {user?.name}</h4>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <Avatar>
            <AvatarImage src={publicUrl} />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <NavbarLink
            title="Profile"
            shortcut="⇧⌘P"
            icon={<User className="mr-2 h-4 w-4" />}
          />
          <Logout />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
