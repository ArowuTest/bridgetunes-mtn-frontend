import { Button, Container, Flex } from "@/src/components/common/styles";
import {
  HeroSection,
  LandingPageWrapper,
  PrizeCard,
} from "./landing-page.style";
import bgImage from "@/src/assets/images/landing-page/landing-page-bg.jpg";
import bgPattern from "@/src/assets/images/landing-page/bg-pattern.png";
import translations from "@/src/constants/translations.json";

export const LandingPage = () => {
  return (
    <LandingPageWrapper backgroundPattern={bgPattern.src}>
      <HeroSection backgroundImage={bgImage.src}>
        <Container>
          <div className="hero__section__content">
            <h1 className="hero__text">{translations.landingPage.heroText}</h1>
            <h4 className="hero__sub__section">
              {translations.landingPage.heroDesc}
            </h4>
            <div className="hero__cta__buttons">
              <Button fontSize="1rem" padding="0.7rem 3.5rem">
                {translations.landingPage.firstButton}
              </Button>
              <Button
                fontSize="1rem"
                backgroundColor="#0056B3"
                color="#fff"
                padding="0.7rem 3.5rem"
              >
                {translations.landingPage.secondButton}
              </Button>
            </div>
          </div>
        </Container>
      </HeroSection>

      <Flex
        hasCustomBG={true}
        justify="center"
        backgroundColor="#000"
        backgroundPattern={bgPattern.src}
        className="life__changing__section"
      >
        <Container className="life__changing__content">
          <h3 className="title">
            {translations.landingPage.lifeChangingTitle}
          </h3>
          <div className="cards__wrapper">
            {translations.landingPage.prizeCards.map((card, idx) => (
              <PrizeCard key={idx}>
                <p>{card.title}</p>
                <p>{card.desc}</p>
              </PrizeCard>
            ))}
          </div>
        </Container>
      </Flex>
    </LandingPageWrapper>
  );
};

export default LandingPage;
