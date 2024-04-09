import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
} from '@/components/atoms';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/molecules';
import { supabaseGetPublicUrl } from '@/lib/supabase';
import { getServerSession } from 'next-auth';
import { dateFormat } from '@/lib/utils';
import authOptions from '@/app/api/auth/[...nextauth]/options';
import prisma from '../../../../lib/prisma';
import Link from 'next/link';

export async function Profile() {
  const session = await getServerSession(authOptions);

  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });

  const { publicUrl } = await supabaseGetPublicUrl(
    user?.image as string,
    'profile'
  );
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-col items-center gap-2">
        <Avatar className="w-32 h-32">
          <AvatarImage src={publicUrl} />
          <AvatarFallback>Profile</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl pt-3">{user?.name}</CardTitle>
        <CardDescription>{dateFormat(user?.date_created)}</CardDescription>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-center">
        <Link href="/profile/edit">
          <Button>Update Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
