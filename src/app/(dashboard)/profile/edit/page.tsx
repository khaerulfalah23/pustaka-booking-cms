import { ProfileForm } from '@/components/organisms';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/options';
import prisma from '../../../../../lib/prisma';

const EditProfilePage = async () => {
  const session = await getServerSession(authOptions);

  const admin = await prisma.user.findFirst({
    where: { id: session?.user?.id },
  });

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center mt-5 md:mt-10 p-6">
      <h1 className="text-2xl text-center">Edit your profile</h1>
      <ProfileForm detail={admin} />
    </div>
  );
};

export default EditProfilePage;
