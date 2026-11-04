import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // El HTML suelto de un juego no tiene texto ni anuncios: se indexa solo dentro de su página
        source: "/juegos/:path(.*\\.html)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, indexifembedded" }],
      },
    ];
  },
};

export default nextConfig;
