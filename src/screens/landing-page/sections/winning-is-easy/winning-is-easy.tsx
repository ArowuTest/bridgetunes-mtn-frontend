import { Flex } from "@/src/components/common/styles";
import { StepCard, WinningIsEasySectionWrapper } from "./winning-is-easy.style";
import translations from "@/src/constants/translations.json";

export const WinningIsEasySection = () => {
  return (
    <WinningIsEasySectionWrapper>
      <Flex
        align="center"
        justify="center"
        gap="45px"
        direction="column"
        background="linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%)"
        className="winning__section"
      >
        <h1 className="title">{translations.landingPage.winningText}</h1>
        <div className="winning__cards__wrapper">
          {translations.landingPage.winningStepCards.map((card, idx) => (
            <StepCard key={idx}>
              <div className="image__wrapper">
                <img className="image" src={card.image} alt={`step-${idx}`} />
              </div>
              <p className="step">{card.title}</p>
              <p className="description">{card.desc}</p>
            </StepCard>
          ))}
        </div>
      </Flex>
    </WinningIsEasySectionWrapper>
  );
};
