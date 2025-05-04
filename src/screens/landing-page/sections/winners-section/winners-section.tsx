import { Button, Container, Flex } from "@/src/components/common/styles";
import { WinnersSectionWrapper } from "./winners-section.styles";
import translations from "@/src/constants/translations.json";
import { Counter } from "@/src/components/common/counter";
import { WinnerCard } from "@/src/components/common/winner-card";
import { useState } from "react";

export const WinnersSection = () => {
  const [winners, setWinners] = useState(translations.landingPage.winnersCards);
  return (
    <WinnersSectionWrapper>
      <Flex
        align="center"
        justify="center"
        gap="45px"
        direction="column"
        backgroundColor="#000"
        backgroundPattern={"/images/landing-page/bg-pattern.png"}
        className="winners__section"
        hasCustomBG={true}
      >
        <h1 className="title">{translations.landingPage.nextDrawTitle}</h1>
        <Flex
          justify="center"
          align="center"
          direction="column"
          className="next__draw__content"
          background="linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%)"
          gap="32px"
        >
          <p className="text">Time Remaining Until [Daily/Saturday] Draw</p>
          <Counter targetDate={new Date("2025-06-01T00:00:00").toISOString()} />
          <Flex
            direction="row"
            justify="center"
            align="center"
            className="prize"
            gap="16px"
          >
            <img
              className="price__image"
              src="/images/landing-page/1-milli.png"
              alt="price amount"
            />
            <p className="jackpot__text">Jackpot Up For Grabs!</p>
          </Flex>
        </Flex>
        <Button padding="0.5rem 5rem" fontSize="0.9rem">
          {translations.landingPage.rechargeNowButton}
        </Button>
        <div className="winners__pool__box">
          <Flex
            className="winners__pool__content"
            direction="column"
            justify="center"
            align="center"
            gap="40px"
            background="linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%)"
          >
            <h1 className="title">
              {translations.landingPage.winnersPoolText}
            </h1>
            <Flex
              direction="row"
              justify="center"
              align="center"
              gap="30px"
              className="winners__card__wrapper"
            >
              {winners.map((card, idx) => (
                <WinnerCard card={card} key={idx} />
              ))}
            </Flex>
            <Button padding="0.5rem 5rem" fontSize="0.9rem">
              {translations.landingPage.winnerBtnText}
            </Button>
          </Flex>
        </div>
      </Flex>
    </WinnersSectionWrapper>
  );
};
