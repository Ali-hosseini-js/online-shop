/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3100",
        pathname: "/files/main/**",
      },
      // Add other domains if needed:
      // {
      //   protocol: 'https',
      //   hostname: 'your-production-domain.com',
      //   pathname: '/files/main/**',
      // },
    ],
  },
};

export default nextConfig;
