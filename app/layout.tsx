import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rpmarketing.vercel.app"),
  title: "RP Marketing | Marketing digital premium",
  description:
    "Agência de marketing digital fundada por Ryan Elizario e Pietro Freitas. Estratégia, conteúdo, tráfego pago, branding e posicionamento para marcas que querem crescer.",
  applicationName: "RP Marketing",
  authors: [
    { name: "Ryan Elizario" },
    { name: "Pietro Freitas" }
  ],
  keywords: [
    "RP Marketing",
    "marketing digital",
    "gestão de redes sociais",
    "tráfego pago",
    "branding",
    "posicionamento digital",
    "agência de marketing"
  ],
  openGraph: {
    title: "RP Marketing | Transformamos presença digital em posicionamento",
    description:
      "Você cuida do seu negócio. A gente cuida do seu marketing.",
    url: "https://rpmarketing.vercel.app",
    siteName: "RP Marketing",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/assets/rp-hero-cinematic.png",
        width: 1536,
        height: 1024,
        alt: "Background cinematografico da RP Marketing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "RP Marketing",
    description:
      "Marketing digital premium para marcas que querem crescer com posicionamento."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
