import ServicePageLayout from "@/components/ServicePageLayout";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Interior Design & Turnkey Interiors in Chennai',
  description: 'Bespoke interior design and turnkey execution for luxury residences and commercial spaces.',
  alternates: {
    canonical: 'https://viventelifestyle.com/services/interior-design',
  },
};
//D
export default function InteriorDesignPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Interior Design & Execution"
      subtitle="Transforming spaces into refined expressions of luxury and comfort — from concept to complete turnkey execution."
      heroGradient=""
      imagePath="/projects/Interior_design.png"
      overview="Vivente delivers bespoke interior design solutions for luxury residences and commercial spaces that embody elegance, comfort, and timeless sophistication. From concept development to final execution, our designers curate every detail to create interiors that reflect individuality while maintaining the highest standards of luxury design and craftsmanship. Our comprehensive turnkey solutions ensure seamless project delivery with refined aesthetics and functional excellence."
      offeringsTitle="Our Design Services"
      offerings={[
        { label: "Luxury Residential Interiors" },
        { label: "Commercial Interior Design" },
        { label: "Bespoke Interior Concepts" },
        { label: "Complete Turnkey Execution" },
        { label: "Space Planning & Layout" },
        { label: "Custom Furniture & Joinery" },
        { label: "Lighting Design" },
        { label: "Modular Kitchens & Wardrobes" },
        { label: "Premium Finishes & Materials" },
      ]}
      extraSections={[
        {
          title: "Design Philosophy",
          items: [
            "Every interior uniquely crafted to client's lifestyle",
            "Blend of aesthetics, function, and comfort",
            "Premium sourcing from global design houses",
            "3D visualization before execution",
            "Dedicated project management from start to finish",
          ],
        },
        {
          title: "Turnkey Execution",
          items: [
            "Single point of contact for entire project",
            "Coordination of all trades and vendors",
            "Quality checks at every milestone",
            "On-time delivery with zero compromise",
            "Post-handover maintenance support",
          ],
        },
      ]}
    />
  );
}
