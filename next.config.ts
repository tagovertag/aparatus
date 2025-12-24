// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
const nextConfig = {
  experimental: {
    allowedDevOrigins: ["http://192.168.3.35:3000", "http://localhost:3000"],
  },
};
module.exports = nextConfig;
