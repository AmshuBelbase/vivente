import type { Metadata } from 'next';
import SwimmingPoolClient from './SwimmingPoolClient';

export const metadata: Metadata = {
  title: 'Swimming Pool Products',
  description:
    'Explore our range of premium swimming pool products and equipment for luxury pools, interiors, and real estate projects.',
  alternates: {
    canonical:
      'https://viventelifestyle.com/products/swimming-pool-products',
  },
};

export default function SwimmingPoolProductsPage() {
  return <SwimmingPoolClient />;
}