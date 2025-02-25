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
    remotePatterns: [
      {protocol: 'https',
        hostname: 'replicate.delivery',
      },
      {
        protocol: 'https',
        hostname:"oybmzfurahdlmffbgzvs.supabase.co"
      }
    ]
  }
};

// next.config.js
module.exports = {
  i18n: {
    locales: ['en-US'], // 强制使用英语
    defaultLocale: 'en-US',
  },
};


export default nextConfig;