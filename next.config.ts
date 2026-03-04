import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/schedule",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/notification",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/settings",
        destination: "/dashboard",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/dashboard",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
