/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abhayenterprise.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;

