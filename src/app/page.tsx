import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProjectsSlider from "@/components/sections/ProjectsSlider";
import Testimonials from "@/components/sections/Testimonials";
import ProjectGallery from "@/components/sections/ProjectGallery";
import FindUsMap from "@/components/sections/FindUsMap";
import BrandsSlider from "@/components/sections/BrandsSlider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProjectGallery />
      <WhyChooseUs />
      <ProjectsSlider />
      <BrandsSlider />
<Services />
      <Products />
      <Testimonials />
      <FindUsMap />
      <Footer />
    </main>
  );
}
