import { motion } from "framer-motion";
import styled from "styled-components";
import { Button, Flex } from "./styles";
import translations from "@/src/constants/translations.json";

const NoWinnerBoxWrapper = styled(Flex)`
  padding: 20px 30px;
  border-radius: 12px;
  flex-wrap: wrap;

  .image {
    max-width: 180px;
  }

  .main__text {
    font-size: 1.9rem;
    color: #ffcc08;
    margin-bottom: 5px;
  }

  .cta__text {
    padding: 4px 14px;
    font-weight: 700;
    font-size: 0.9rem;
    text-transform: capitalize;
  }

  .sub__text {
    font-size: 0.75rem;
    color: #fff;
  }
`;

export const NoWinnerBox = () => {
  return (
    <NoWinnerBoxWrapper
      background="linear-gradient(90deg, #2C73DB 0%, #8B5CF6 100%)"
      direction="row"
      justify="center"
      align="center"
      className="no__winner__box"
      gap="18px"
    >
      <motion.img
        className="image"
        src="/images/landing-page/winner-image.png"
        alt="winner"
        animate={{
          scale: [1, 1.05, 1], 
        }}
        transition={{
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut",
        }}
      />
      <Flex direction="column" justify="center" align="center" gap="6px">
        <h1 className="main__text">
          {translations.landingPage.noWinnerTexts.mainText}
        </h1>
        <Button fontFamily="Open Sans" className="cta__text">
          {translations.landingPage.noWinnerTexts.buttonText}
        </Button>
        <p className="sub__text">
          {translations.landingPage.noWinnerTexts.subText}
        </p>
      </Flex>
    </NoWinnerBoxWrapper>
  );
};
