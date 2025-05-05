import { Flex } from "@/src/components/common/styles";
import { StepCard, WinningIsEasySectionWrapper } from "./winning-is-easy.style";
import translations from "@/src/constants/translations.json";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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
        <motion.h1
          className="global-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          {translations.landingPage.winningText}
        </motion.h1>
        <motion.div
          className="winning__cards__wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {translations.landingPage.winningStepCards.map((card, idx) => (
            <StepCard
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={itemVariants}
            >
              <div className="image__wrapper">
                <img className="image" src={card.image} alt={`step-${idx}`} />
              </div>
              <p className="step">{card.title}</p>
              <p className="description">{card.desc}</p>
            </StepCard>
          ))}
        </motion.div>
      </Flex>
    </WinningIsEasySectionWrapper>
  );
};
