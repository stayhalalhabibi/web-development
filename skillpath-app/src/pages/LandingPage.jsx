import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";
import TestimonialSection from "../components/TestimonialSection";
import CTABanner from "../components/CTABanner";

function LandingPage() {
  return (
    <>
      <HeroSection />

      <FeatureCard
        title="React"
        description="Learn React from scratch"
      />

      <FeatureCard
        title="Node.js"
        description="Build backend applications"
      />

      <TestimonialSection />

      <CTABanner />
    </>
  );
}

export default LandingPage;