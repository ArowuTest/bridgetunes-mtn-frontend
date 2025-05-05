import { Container, Flex } from "@/src/components/common/styles";
import translations from "@/src/constants/translations.json";
import { LifeChangingSectionWrapper, PrizeCard } from "./life-changing.styles";
import { motion } from "framer-motion";

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

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
          <motion.h1
            className="global-title"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            {translations.landingPage.lifeChangingTitle}
          </motion.h1>
          <motion.div
            className="cards__wrapper"
            initial="hidden"
            animate="visible"
            variants={contentVariants}
          >
            {translations.landingPage.prizeCards.map((card, idx) => (
              <PrizeCard key={idx}>
                <p className="title">{card.title}</p>
                <div className="bottom__section">
                  <p className="desc">{card.desc}</p>
                  <motion.img
                    className="prize__image"
                    src={card.image}
                    alt="prize"
                    variants={pulseVariants}
                    animate="animate"
                  />
                  <p className="bottom__text">{card.bottomText}</p>
                </div>
              </PrizeCard>
            ))}
          </motion.div>
        </Container>
      </Flex>
    </LifeChangingSectionWrapper>
  );
};
