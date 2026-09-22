import Hero from "@/components/Hero";
import ProjectIntro from "@/components/ProjectIntro";
import FacadeGallery from "@/components/FacadeGallery";
import FloorPlansSection from "@/components/FloorPlansSection";
import SitePhotosSection from "@/components/SitePhotosSection";
import LocationSection from "@/components/LocationSection";
import SpecsSection from "@/components/SpecsSection";
import PartnersSection from "@/components/PartnersSection";
import ReadyFeatures from "@/components/ReadyFeatures";
import WhySection from "@/components/WhySection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectIntro />
      <FacadeGallery />
      <FloorPlansSection />
      <SitePhotosSection />
      <LocationSection />
      <ReadyFeatures />
      <SpecsSection />
      <PartnersSection />
      <StatsSection />
      <WhySection />
      <CTASection />
    </>
  );
}
