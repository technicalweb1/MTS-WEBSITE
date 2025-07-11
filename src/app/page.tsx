import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import ProjectsHighlight from "@/components/ProjectsHighlight";
import MyCampusIntro from "@/components/MyCampusIntro";
import HomeCTA from "@/components/HomeCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <ProjectsHighlight />
      <MyCampusIntro />
      <HomeCTA />
    </>
  );
}
