import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Premium Swimming Pool Design & Construction in Chennai | Vivente Lifestyle",
  description: "Luxury swimming pool design, construction, and maintenance for residences, resorts, and commercial spaces.",
};

export default function SwimmingPoolsPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Swimming Pools"
      subtitle="Designing and building luxury swimming pools that elevate outdoor living into private resort-style retreats."
      heroGradient=""
      imagePath="/projects/azure-heights.jpg"
      overview="Vivente specializes in designing and building luxury swimming pools that transform outdoor spaces into private resort-style retreats. Each pool is thoughtfully crafted using advanced engineering, premium materials, and sophisticated design to deliver exceptional beauty, performance, and durability. Whether creating a serene residential pool, a dramatic infinity-edge pool, or a large-scale commercial installation, our team provides fully customized solutions tailored to your lifestyle and environment."
      offeringsTitle="Pool Expertise"
      offerings={[
        { label: "Private Luxury Pools" },
        { label: "Customized Designer Pools" },
        { label: "Ready-Made & Modular Pools" },
        { label: "Infinity Edge Pools" },
        { label: "Hydrotherapy & Wellness Pools" },
        { label: "Wave Pools" },
        { label: "Leisure Pools" },
        { label: "Fountain Pools" },
        { label: "Commercial Swimming Pools" },
      ]}
      extraSections={[
        {
          title: "Services Include",
          items: [
            "Custom Pool Design & Installation",
            "Energy-Efficient Pool Heating Solutions",
            "Swimming Pool Renovations & Upgrades",
            "Professional Pool Maintenance & Cleaning",
            "Pool Equipment Supply & Installation",
          ],
        },
        {
          title: "Pool Products",
          items: [
            "Pool Filtration Systems",
            "Pool Pumps & Equipment",
            "Automatic Pool Cleaning Systems",
            "Pool Lighting Solutions",
            "Pool Chemicals & Maintenance Accessories",
          ],
        },
      ]}
    />
  );
}
