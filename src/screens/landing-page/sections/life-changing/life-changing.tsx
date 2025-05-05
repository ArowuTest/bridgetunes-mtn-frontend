import { Container, Flex } from "@/src/components/common/styles";
import translations from "@/src/constants/translations.json";
import { LifeChangingSectionWrapper, PrizeCard } from "./life-changing.styles";

export const LifeChangingSection = () => {
  return (
    <LifeChangingSectionWrapper>
      <Flex
        hasCustomBG={true}
        justify="center"
        backgroundColor="#000"
        backgroundPattern={"/images/landing-page/bg-pattern.png"}
        className="life__changing__section"
      >
        <Container className="life__changing__content">
          <h1 className="global-title">
            {translations.landingPage.lifeChangingTitle}
          </h1>
          <div className="cards__wrapper">
            {translations.landingPage.prizeCards.map((card, idx) => (
              <PrizeCard key={idx}>
                <p className="title">{card.title}</p>
                <div className="bottom__section">
                  <p className="desc">{card.desc}</p>
                  <img className="prize__image" src={card.image} alt="prize" />
                  <p className="bottom__text">{card.bottomText}</p>
                </div>
              </PrizeCard>
            ))}
          </div>
        </Container>
      </Flex>
    </LifeChangingSectionWrapper>
  );
};
