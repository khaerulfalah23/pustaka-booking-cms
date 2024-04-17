import { EditCategoryForm } from '@/components/organisms';
import prisma from '../../../../../../lib/prisma';

const UpdateCategoryPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="max-w-md mx-auto mt-5 md:mt-10 p-6">
      <h1 className="text-2xl text-center">Edit Category</h1>
      <EditCategoryForm category={category || { id: '', category: '' }} />
    </div>
  );
};

export default UpdateCategoryPage;
