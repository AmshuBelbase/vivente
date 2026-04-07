import ServicePageLayout from "@/components/ServicePageLayout";

export const metadata = {
  title: "Facility Management | Vivente",
  description: "Professional facility management and property care services to keep your property pristine, efficient, and valuable.",
};

export default function FacilityManagementPage() {
  return (
    <ServicePageLayout
      eyebrow="Our Services"
      title="Facility Management"
      subtitle="Professional property care services ensuring every installation remains pristine, efficient, and valuable for years to come."
      heroGradient=""
      overview="Vivente provides professional facility management and property care services to ensure every property remains efficient, secure, and impeccably maintained. Our commitment extends far beyond project completion — through Annual Maintenance Contracts (AMC) and professional facility management, we ensure every property, installation, and environment continues to operate flawlessly, preserving both performance and long-term value."
      offeringsTitle="Management Services"
      offerings={[
        { label: "Property Maintenance" },
        { label: "Technical Facility Management" },
        { label: "Cleaning & Upkeep" },
        { label: "Landscape Maintenance" },
        { label: "Swimming Pool Maintenance" },
        { label: "Water Feature Servicing" },
        { label: "Annual Maintenance Contracts (AMC)" },
        { label: "Emergency Repair Services" },
        { label: "Operational Management" },
      ]}
      extraSections={[
        {
          title: "Our Commitment",
          items: [
            "Dedicated maintenance teams for each property",
            "Scheduled and preventive maintenance programs",
            "24/7 emergency response availability",
            "Detailed service reports and documentation",
            "Long-term property value preservation",
          ],
        },
        {
          title: "AMC Plans",
          items: [
            "Comprehensive pool care packages",
            "Garden and landscape upkeep",
            "Water feature maintenance",
            "Full property management",
            "Customized service plans",
          ],
        },
      ]}
    />
  );
}
