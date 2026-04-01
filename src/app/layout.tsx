import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Quintero | Guitarrista Clásico",
  description:
    "Carlos Quintero — Guitarrista clásico de Mérida, Venezuela. Concertista, profesor de guitarra y miembro del Sistema de Orquestas Nacionales.",
  keywords: [
    "Carlos Quintero",
    "guitarrista clásico",
    "guitarra clásica",
    "Mérida",
    "Venezuela",
    "concertista",
    "profesor de guitarra",
  ],
  openGraph: {
    title: "Carlos Quintero | Guitarrista Clásico",
    description:
      "Guitarrista clásico de Mérida, Venezuela. Concertista y profesor.",
    type: "website",
    locale: "es_VE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
