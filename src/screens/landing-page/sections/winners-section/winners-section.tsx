import { Flex } from "@/src/components/common/styles";
import { WinnersSectionWrapper } from "./winners-section.styles";
import translations from "@/src/constants/translations.json";
import { Counter } from "@/src/components/common/counter";

export const WinnersSection = () => {
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
          gap="30px"
        >
          <p className="text">Time Remaining Until [Daily/Saturday] Draw</p>
          <Counter targetDate={new Date("2025-06-01T00:00:00").toISOString()} />
          <div></div>
        </Flex>
      </Flex>
    </WinnersSectionWrapper>
  );
};
