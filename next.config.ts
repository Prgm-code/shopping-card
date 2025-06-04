import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // El doble asterisco (**) actúa como comodín para cualquier subdominio y dominio
        port: "",
        pathname: "**", // También permitimos cualquier ruta en el pathname
      },
      {
        protocol: "http",
        hostname: "**", // El doble asterisco (**) actúa como comodín para cualquier subdominio y dominio
        port: "*",
        pathname: "**", // También permitimos cualquier ruta en el pathname
      },
      new URL("http://localhost:3001"),
    ],
  },
};

export default nextConfig;
