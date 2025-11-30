
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BELANARO FORGE LLP - Precision Forging. Global Strength',
    short_name:'belanaroforge',
    description: 'Leading manufacturer and exporter of bearing rings, auto parts, and precision-forged components from India. Trusted by global OEMs across Europe, USA, Middle East, and Asia.',
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}