import { AddCategoryForm } from '@/components/organisms';

const CreateCategoryPage = () => {
  return (
    <div className="max-w-md mx-auto mt-5 md:mt-10 p-6">
      <h1 className="text-2xl text-center">Add Category</h1>
      <AddCategoryForm/>
    </div>
  );
};

export default CreateCategoryPage;
