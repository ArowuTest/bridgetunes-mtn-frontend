import { LandingPageWrapper } from "./landing-page.style";
import { HeroSection } from "./sections/hero-section/hero-section";
import { LifeChangingSection } from "./sections/life-changing/life-changing";
import { WinnersSection } from "./sections/winners-section/winners-section";
import { WinningIsEasySection } from "./sections/winning-is-easy/winning-is-easy";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <HeroSection />
      <LifeChangingSection />
      <WinningIsEasySection />
      <WinnersSection />
    </LandingPageWrapper>
  );
};

export default LandingPage;
