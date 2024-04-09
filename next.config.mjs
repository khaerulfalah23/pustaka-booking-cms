/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ksitqxbgmrstqrsbegpx.supabase.co',
      },
    ],
  },
};

export default nextConfig;
