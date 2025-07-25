/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**', // This allows any HTTPS hostname
      },
      {
        protocol: 'http',
        hostname: '**', // This allows any HTTP hostname
      },
    ],
  },
  env: {
    SANITY_PROJECT_ID: 'dqyhuxze',
    SANITY_DATASET: 'production',
  },
}

export default nextConfig;