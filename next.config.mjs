/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATO_API_TOKEN: process.env.DATO_API_TOKEN,
  },
};

export default nextConfig;
