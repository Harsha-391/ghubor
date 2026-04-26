import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "GHUBOR — Armor for the Modern Gibbor",
  description:
    "Wearable scripture for unseen battles. Dark, sacred, and spare. Each garment is hand-numbered, scripture-dense, and built to withstand the weight of being human.",
  keywords: [
    "GHUBOR",
    "Gibbor",
    "faith apparel",
    "sacred streetwear",
    "scripture clothing",
    "warrior apparel",
  ],
  openGraph: {
    title: "GHUBOR — Armor for the Modern Gibbor",
    description: "Wearable scripture for unseen battles.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
