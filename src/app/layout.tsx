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
  metadataBase: new URL('https://viventelifestyle.com'),
  title: {
    default: 'Vivente Lifestyle | Luxury Construction, Real Estate, Swimming Pools & Interior Design in India',
    template: '%s | Vivente Lifestyle',
  },
  description:
    'Vivente Lifestyle offers luxury construction, interior design, swimming pools, landscaping, water features, and real estate services across India.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'luxury home construction',
    'construction services',
    'architectural design services',
    'villa construction',
    'turnkey construction',
    'custom swimming pool design',
    'luxury swimming pools',
    'infinity pool design',
    'landscaping',
    'luxury landscaping services',
    'outdoor design',
    'water features',
    'water feature design',
    'fountain design',
    'real estate',
    'premium real estate services',
    'facility management',
    'property management services',
    'water wellness',
    'wellness spaces',
    'luxury design and build',

    'real estate company',
    'real estate companies in India',
    'property development company',
    'property developers',
    'luxury real estate',
    'residential real estate',
    'commercial real estate',
    'premium real estate solutions',
    'property consultants',
    'real estate services',

    'swimming pool builders',
    'pool construction company',
    'custom swimming pools',
    'luxury pool builders',
    'pool design and construction',
    'infinity pool builders',
    'villa pool construction',
    'private swimming pool contractors',
    'pool installation services',
    'resort pool builders',

    'interior design company',
    'interior designers',
    'interior design',
    'interior solutions',
    'interior decorators',

    'construction company',
    'luxury construction company',
    'building contractors',
    'architecture firm',
    'architectural design company',
    'design and build company',
    'custom home builders',
    'villa construction company',

    'landscaping company',
    'landscape design services',
    'garden design',
    'outdoor living design',
    'hardscaping services',
    'luxury landscaping',
    'terrace landscaping',
    'villa landscaping',
    'outdoor renovation',
    'garden contractors',

    'water feature designers',
    'fountain builders',
    'custom water features',
    'luxury water features',
    'water wellness design',
    'spa design',
    'outdoor water feature construction',
    'decorative fountains',
    'resort-style features',

    'facility management company',
    'estate management',
    'maintenance services',
    'luxury property management',
    'villa maintenance services',
    'commercial facility management',
    'residential facility management',

    'best real estate company',
    'best interior design company',
    'best swimming pool builders',
    'best construction company',
    'premium design and build company',
    'luxury home solutions',
    'one stop luxury services',
    'turnkey luxury solutions',
    'end to end construction',
    'end to end interior design'
    ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://viventelifestyle.com',
    siteName: 'Vivente Lifestyle',
    title: 'Vivente Lifestyle | Luxury Construction, Real Estate, Swimming Pools & Interior Design in India',
    description:
      'Vivente Lifestyle offers luxury construction, interior design, swimming pools, landscaping, water features, and real estate services across India.',
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
    title: 'Vivente Lifestyle | Luxury Construction, Real Estate, Swimming Pools & Interior Design in India',
    description:
      'Vivente Lifestyle offers luxury construction, interior design, swimming pools, landscaping, water features, and real estate services across India.',
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
