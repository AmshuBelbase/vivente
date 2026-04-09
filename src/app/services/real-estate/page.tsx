import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Luxury Real Estate Development & Advisory in Chennai | Vivente Lifestyle",
  description: "Exclusive real estate advisory and property consultancy services for premium residential and commercial investments.",
};

export default function RealEstatePage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Real Estate & Consultancy"
      subtitle="Strategic real estate advisory connecting clients with exceptional investment opportunities — guided by expertise and trust."
      heroGradient=""
      overview="Vivente provides exclusive real estate services and property consultancy, connecting clients with exceptional residential and commercial investment opportunities. As trusted channel partners for leading developers, we offer privileged access to premium real estate projects and guide clients through every stage of property acquisition and investment with transparency, value, and confidence."
      offeringsTitle="Our Services"
      offerings={[
        { label: "Residential Property Sales & Consultancy" },
        { label: "Commercial Property Solutions" },
        { label: "Property Investment Advisory" },
        { label: "Land & Property Development Opportunities" },
        { label: "Channel Partner Services" },
        { label: "Due Diligence & Legal Assistance" },
        { label: "Market Research & Valuation" },
        { label: "Portfolio Management Advisory" },
      ]}
      extraSections={[
        {
          title: "Why Trust Vivente",
          items: [
            "Privileged access to premium developments",
            "Transparent and client-first approach",
            "Deep market knowledge and expertise",
            "End-to-end transaction support",
            "Long-term relationship beyond the sale",
          ],
        },
        {
          title: "Investment Categories",
          items: [
            "Luxury Villa & Bungalow Projects",
            "Premium Apartment Complexes",
            "Commercial Office & Retail Spaces",
            "Land Acquisition & Development",
            "Hospitality & Resort Investments",
          ],
        },
      ]}
    />
  );
}
