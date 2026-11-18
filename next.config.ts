import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Categorías fusionadas: mostraban los mismos juegos que otra página
  async redirects() {
    return [
      { source: "/juegos/juegos-sin-descargar", destination: "/juegos/juegos-gratis-online", permanent: true },
      { source: "/juegos/rapidos", destination: "/juegos/juegos-para-celular", permanent: true },
    ];
  },
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
