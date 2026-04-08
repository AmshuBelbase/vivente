'use client';

// Google Analytics for production
import { GoogleAnalytics } from '@next/third-parties/google';

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
const SHOULD_TRACK_GA = process.env.NEXT_PUBLIC_SHOULD_TRACK_GA === 'true';

export default function GoogleAnalyticsProd() {
  if (!GA_ID || !SHOULD_TRACK_GA) return null;

  return <GoogleAnalytics gaId={GA_ID} />;
}