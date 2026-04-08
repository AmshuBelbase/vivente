import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";

// Google Analytics for production
import GoogleAnalyticsProd from '@/components/GoogleAnalyticsProd';


import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vivente | Crafting Luxury",
  description:
    "Premium luxury construction, swimming pools, landscaping & lifestyle company. Building spaces that inspire, endure, and elevate everyday life.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
        <GoogleAnalyticsProd /> 
      </body>
    </html>
  );
}
