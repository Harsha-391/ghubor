import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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

export const metadata = {
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

// Runs synchronously before first paint — prevents flash of wrong theme
const antiFlashScript = `(function(){
  var saved = localStorage.getItem('ghubor-theme');
  var theme;
  if (saved) {
    theme = saved;
  } else {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  if (theme === 'light') document.documentElement.setAttribute('data-theme', 'light');
})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Must be first — blocks paint until theme is resolved */}
        <script dangerouslySetInnerHTML={{ __html: antiFlashScript }} />
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
