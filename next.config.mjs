/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Tillad pokemon-billeder fra GitHub's raw-host.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/PokeAPI/sprites/**",
      },
    ],
  },
};

export default nextConfig;
