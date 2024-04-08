import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!!
);

const createId = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const supabaseUploadProfilePicture = async (
  file: File | string,
  bucket: 'profile'
) => {
  const fileName = createId(10);

  const { data, error } = await supabase.storage
    .from(bucket)
    .update('public/' + fileName, file, {
      cacheControl: '3600',
      upsert: true,
    });

  return { data, error, fileName };
};

export const supabaseGetPublicUrl = async (
  fileName: string,
  bucket: 'profile' | 'book'
) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(fileName);

  return {
    publicUrl: data.publicUrl,
  };
};
