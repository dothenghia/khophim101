/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

// module.exports = nextConfig
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.ophim1.com',
        port: '',
        pathname: '/uploads/movies/**',
      },
    ],
  },
};