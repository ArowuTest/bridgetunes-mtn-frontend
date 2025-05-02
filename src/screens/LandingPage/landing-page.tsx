import { LandingPageWrapper } from "./landing-page.style";
import { HeroSection } from "./sections/hero-section/hero-section";
import { LifeChangingSection } from "./sections/life-changing/life-changing";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeroSection />
      <LifeChangingSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
