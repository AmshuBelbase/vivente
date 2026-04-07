import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Luxury Construction | Vivente",
  description: "Bespoke luxury villa construction, residential developments, and premium commercial projects built with precision and excellence.",
};

export default function ConstructionPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Luxury Construction"
      subtitle="Transforming architectural visions into exceptional built environments through precision-driven construction and luxury development."
      heroGradient=""
      overview="Vivente specializes in the construction of luxury villas, residential developments, and premium commercial projects. Combining modern engineering, meticulous craftsmanship, and superior materials, we deliver structures that are both architecturally striking and built to endure for generations. Every structure we build reflects durability, architectural excellence, and timeless design."
      offeringsTitle="What We Build"
      offerings={[
        { label: "Luxury Villas & Bungalows" },
        { label: "Residential Developments" },
        { label: "Commercial Buildings" },
        { label: "Architectural Planning & Design" },
        { label: "Premium Material Procurement" },
        { label: "Structural Engineering Excellence" },
      ]}
      extraSections={[
        {
          title: "Our Approach",
          items: [
            "End-to-end project management from concept to handover",
            "Advanced engineering with premium materials",
            "Meticulous attention to every construction detail",
            "Timely delivery without compromising quality",
            "Post-construction support and warranty",
          ],
        },
        {
          title: "Project Types",
          items: [
            "Luxury Villas & Bungalows",
            "Residential Apartment Complexes",
            "Premium Commercial Offices",
            "Hospitality & Resort Construction",
            "Renovation & Restoration Projects",
          ],
        },
      ]}
    />
  );
}
