import { CategoryColumns } from '@/components/molecules';
import { DataTable } from '@/components/organisms';
import prisma from '../../../../lib/prisma';

const CategoryPage = async () => {
  const data = await prisma.category.findMany();
  return (
    <div className="container max-w-xl mt-3 mx-auto">
      <DataTable
        filter="category"
        btnLabel="Add Category"
        route="/category/create"
        columns={CategoryColumns}
        data={data}
      />
    </div>
  );
};

export default CategoryPage;
