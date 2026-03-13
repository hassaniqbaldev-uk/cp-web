/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/cookies-policy",
  //       destination: "/cookie-policy",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
