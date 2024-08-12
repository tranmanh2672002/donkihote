/** @type {import('next').NextConfig} */
const { MONGODB_URI, NEXT_PUBLIC_CLOUDINARY_API_KEY, NEXT_PUBLIC_CLOUDINARY_API_SECRET, NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, API_BASEURL } =
  process.env;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    MONGODB_URI,
    NEXT_PUBLIC_CLOUDINARY_API_KEY,
    NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    API_BASEURL,
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
