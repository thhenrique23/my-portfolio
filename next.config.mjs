/** @type {import('next').NextConfig} */
console.log(process.env);
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/github-stats",
        destination:
          process.env.API_URL ||
          `http://localhost:${process.env.PORT}/api/github-stats`,
      },
    ];
  },
};

export default nextConfig;
