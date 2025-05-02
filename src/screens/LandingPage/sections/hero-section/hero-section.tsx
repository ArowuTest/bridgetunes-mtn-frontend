import { Button, Container } from "@/src/components/common/styles";
import translations from "@/src/constants/translations.json";
import { HeroSectionWrapper } from "./hero-section.styles";

export const HeroSection = () => {
    return (
      <HeroSectionWrapper
        backgroundImage={"/images/landing-page/landing-page-bg.jpg"}
      >
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
      </HeroSectionWrapper>
    );
}