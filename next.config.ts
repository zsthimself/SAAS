// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images:{
//     remotePatterns:[
//       {
//       protocol:"https",
//       hostname:"replicate.delivery"
//   }
// ]
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['replicate.delivery'],
  },
};

export default nextConfig;