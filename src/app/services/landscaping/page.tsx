import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Luxury Landscaping & Garden Design in Chennai | Vivente Lifestyle",
  description: "Sophisticated landscape design and outdoor living environments crafted with natural elements and innovative design.",
};

export default function LandscapingPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Landscaping"
      subtitle="Crafting sophisticated landscape environments that enhance outdoor living and create serene, resort-inspired spaces."
      heroGradient=""
      imagePath="/projects/azure-heights.jpg"
      overview="Vivente creates sophisticated landscape environments that enhance outdoor living and architectural harmony. Our landscape specialists blend natural elements, innovative design, and sustainable practices to craft outdoor spaces that are visually striking, functional, and enduring. From private gardens to large estate landscapes, we transform outdoor environments into refined living experiences."
      offeringsTitle="Landscaping Services"
      offerings={[
        { label: "Garden Design & Planting" },
        { label: "Softscape Design" },
        { label: "Hardscape Design" },
        { label: "Terrace Gardens" },
        { label: "Vertical Gardens" },
        { label: "Outdoor Seating Areas" },
        { label: "Pergolas & Gazebos" },
        { label: "Pathways & Outdoor Lighting" },
        { label: "Lawn Development with Irrigation" },
        { label: "Annual Maintenance Contracts (AMC)" },
      ]}
      extraSections={[
        {
          title: "Design Philosophy",
          items: [
            "Harmony between nature and architecture",
            "Curated plant selections for tropical climates",
            "Sustainable landscaping practices",
            "Long-term maintenance planning",
            "Resort-inspired outdoor environments",
          ],
        },
        {
          title: "Project Scale",
          items: [
            "Private residential garden design",
            "Large estate landscape transformation",
            "Commercial property landscaping",
            "Resort & hospitality outdoor spaces",
            "Corporate campus greening",
          ],
        },
      ]}
    />
  );
}
