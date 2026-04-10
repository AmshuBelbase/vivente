import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Vivente Lifestyle — our story, vision, and the team behind India\'s premium luxury lifestyle services.',
  alternates: {
    canonical: 'https://viventelifestyle.com/about',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}