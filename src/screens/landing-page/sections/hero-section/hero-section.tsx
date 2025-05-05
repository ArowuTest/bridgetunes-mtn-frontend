import { useState, useEffect } from "react";
import { Button, Container } from "@/src/components/common/styles";
import translations from "@/src/constants/translations.json";
import { HeroSectionWrapper } from "./hero-section.styles";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ConfettiBox from "@/src/components/common/confetti-box";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const HeroSection = () => {
  const { push } = useRouter();
  const [showConfettiImage, setShowConfettiImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfettiImage(true), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSectionWrapper
      backgroundImage={"/images/landing-page/landing-page-bg.jpg"}
    >
      <ConfettiBox
        gravity={0.1}
        height={1000}
        initialVelocityX={2}
        initialVelocityY={2}
        numberOfPieces={700}
        opacity={1}
        recycle={false}
        run
        width={1600}
        wind={0}
      />
      {showConfettiImage && (
        <img
          className="confettiImg"
          src="/images/confetti.png"
          alt="confetti"
        />
      )}
      <Container>
        <motion.div
          className="hero__section__content"
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          <h1 className="hero__text">{translations.landingPage.heroText}</h1>
          <h4 className="hero__sub__section">
            {translations.landingPage.heroDesc}
          </h4>
          <div className="hero__cta__buttons">
            <Button
              fontSize="1rem"
              padding="0.7rem 3.5rem"
              onClick={() => push("/opt-in-experience")}
            >
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
        </motion.div>
      </Container>
    </HeroSectionWrapper>
  );
};
