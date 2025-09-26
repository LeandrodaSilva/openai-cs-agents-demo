/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Proxy /chat requests to the backend server
  async rewrites() {
    return [
      {
        source: "/chat",
        destination: "http://qksk8wgcksss8kcg8cccsgsc.144.22.171.89.sslip.io/chat",
      },
    ];
  },
};

export default nextConfig;
