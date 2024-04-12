import { Category, CategoryColumns } from '@/components/molecules';
import { DataTable } from '@/components/organisms';

async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  return [
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
    {
      id: 'fkasjdkfjaskdjf',
      category: 'Kartun',
    },
    {
      id: 'fasjkdjfka',
      category: 'Teknologi',
    },
  ];
}
const CategoryPage = async () => {
  const data = await getData();

  return (
    <div className="container max-w-xl mt-3 mx-auto">
      <DataTable filter="category" columns={CategoryColumns} data={data} />
    </div>
  );
};

export default CategoryPage;
