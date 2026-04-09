import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Designer Water Features & Fountains in Chennai | Vivente Lifestyle",
  description: "Bespoke water features — fountains, waterfalls, ponds and streams that bring movement and elegance to any space.",
};

export default function WaterFeaturesPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Water Features"
      subtitle="Bespoke water features that introduce movement, elegance, and a calming sensory experience to architectural environments."
      heroGradient=""
      imagePath="/projects/azure-heights.jpg"
      overview="Water has the power to transform a space. Vivente creates bespoke water features including fountains, waterfalls, ponds, and flowing streams that introduce movement, elegance, and a calming sensory experience to architectural environments. Our water feature designs become captivating focal points within landscapes, residences, resorts, and commercial environments."
      offeringsTitle="Water Feature Designs"
      offerings={[
        { label: "Custom-Designed Fountains" },
        { label: "Waterfalls" },
        { label: "Decorative Garden Fountains" },
        { label: "Ponds & Streams" },
        { label: "Bubbling Rocks & Garden Springs" },
        { label: "Reflecting Pools" },
        { label: "Decorative Water Walls" },
        { label: "Koi Ponds" },
        { label: "Hydrotherapy Water Features" },
      ]}
      extraSections={[
        {
          title: "Applications",
          items: [
            "Private residential estates",
            "Resort & hotel lobbies and gardens",
            "Commercial office environments",
            "Public spaces & parks",
            "Landscape focal point installations",
          ],
        },
        {
          title: "Our Process",
          items: [
            "Site assessment and concept design",
            "3D visualization and client approval",
            "Premium material sourcing",
            "Expert installation with minimal disruption",
            "Ongoing maintenance and servicing",
          ],
        },
      ]}
    />
  );
}
