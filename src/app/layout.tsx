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

// export const metadata: Metadata = {
//   title: "Vivente Lifestyle | Luxury Construction, Swimming Pools & Landscaping in Chennai",
//   description:
//     "Premium luxury construction, swimming pools, landscaping & lifestyle company. Building spaces that inspire, endure, and elevate everyday life.",
// };


export const metadata: Metadata = {
  metadataBase: new URL('https://viventelifestyle.com'),
  title: {
    default: 'Vivente Lifestyle | Premium Pools, Interiors & Real Estate',
    template: '%s | Vivente Lifestyle',
  },
  description:
    'Vivente Lifestyle offers luxury construction, interior design, swimming pools, landscaping, water features, and real estate services across India.',
  keywords: [
    'luxury swimming pools',
    'interior design',
    'construction services',
    'landscaping',
    'water features',
    'real estate',
    'facility management',
    'water wellness',
    'vivente lifestyle',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://viventelifestyle.com',
    siteName: 'Vivente Lifestyle',
    title: 'Vivente Lifestyle | Premium Pools, Interiors & Real Estate',
    description:
      'Luxury construction, interior design, swimming pools, landscaping & real estate services.',
    images: [
      {
        url: '/og-image.jpg', // we'll create this next
        width: 1200,
        height: 630,
        alt: 'Vivente Lifestyle',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivente Lifestyle | Premium Pools, Interiors & Real Estate',
    description:
      'Luxury construction, interior design, swimming pools, landscaping & real estate services.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://viventelifestyle.com',
  },
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
