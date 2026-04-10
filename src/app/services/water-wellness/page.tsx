import ServicePageLayout from "@/components/ServicePageLayout";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Water Wellness & Hydrotherapy in Chennai',
  description: 'Premium & Luxury water wellness solutions — saunas, steam rooms, hot tubs, jacuzzis, and swim spas for relaxation and rejuvenation.',
  alternates: {
    canonical: 'https://viventelifestyle.com/services/water-wellness',
  },
};

export default function WaterWellnessPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Water Wellness"
      subtitle="Luxurious wellness environments designed to promote relaxation, rejuvenation, and holistic wellbeing."
      heroGradient=""
      imagePath="/projects/azure-heights.jpg"
      overview="Vivente introduces luxury water wellness installations designed to promote relaxation, rejuvenation, and holistic wellbeing. Our wellness solutions combine modern spa technology with elegant architectural design to create tranquil personal retreats within residential and commercial spaces. We bring the experience of a world-class spa into private homes and commercial settings with uncompromising quality."
      offeringsTitle="Wellness Solutions"
      offerings={[
        { label: "Hot Tubs" },
        { label: "Swim Spas" },
        { label: "Saunas" },
        { label: "Steam Rooms" },
        { label: "Jacuzzis" },
        { label: "Wellness Retreat Design" },
        { label: "Hydrotherapy Pools" },
        { label: "Cold Plunge Pools" },
        { label: "Custom Wellness Concepts" },
      ]}
      extraSections={[
        {
          title: "Design Approach",
          items: [
            "Integration with existing architecture",
            "Custom wellness retreat concepts",
            "Premium global equipment sourcing",
            "Energy-efficient systems",
            "Maintenance and service contracts",
          ],
        },
        {
          title: "Applications",
          items: [
            "Luxury private residences",
            "Resort & hotel wellness centres",
            "Commercial spa facilities",
            "Fitness & wellness studios",
            "Corporate wellness spaces",
          ],
        },
      ]}
    />
  );
}
