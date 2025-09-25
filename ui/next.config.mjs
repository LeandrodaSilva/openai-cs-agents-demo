/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Proxy /chat requests to the backend server
  async rewrites() {
    return [
      {
        source: "/chat",
        destination: "http://backend-hcg8ww88gg84o04kc4cokc4o-235133776208:8888/chat",
      },
    ];
  },
};

export default nextConfig;
