import Hero from "@/components/Hero";
import TheGrill from "@/components/TheGrill";
import LunchSpecials from "@/components/LunchSpecials";
import FanFavorites from "@/components/FanFavorites";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import LocationSection from "@/components/LocationSection";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <>
      <Hero />
      <TheGrill />
      <LunchSpecials />
      <FanFavorites />
      <Story />
      <Testimonials />
      <LocationSection />
      <FAQAccordion />
    </>
  );
}
