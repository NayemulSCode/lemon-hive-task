/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost:3001", "api.react-finland.fi"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
