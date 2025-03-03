/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sabrineh.ir', 
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  headers: async () => [
    {
      source: '/favicon.ico',
      headers: [
        {
          key: 'Content-Type',
          value: 'image/x-icon',
        },
      ],
    },
  ],
};

export default nextConfig;
