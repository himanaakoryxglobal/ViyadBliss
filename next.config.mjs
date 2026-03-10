/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: false,
  reactStrictMode: true,

  sassOptions: {
    silenceDeprecations: ["import"],
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;