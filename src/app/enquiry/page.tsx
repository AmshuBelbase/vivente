import type { Metadata } from 'next';
import EnquiryClient from './EnquiryClient';

export const metadata: Metadata = {
  title: 'Contact & Enquiry',
  description:
    'Get in touch with Vivente Lifestyle for luxury pool, interior, construction or real estate enquiries.',
  alternates: {
    canonical: 'https://viventelifestyle.com/enquiry',
  },
};

export default function EnquiryPage() {
  return <EnquiryClient />;
}