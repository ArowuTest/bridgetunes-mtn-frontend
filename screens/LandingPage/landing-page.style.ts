import styled from "styled-components";

interface LandingPageWrapperProps {
  backgroundPattern: string;
}

interface HeroSectionWrapperProps {
  backgroundImage: string;
}

export const LandingPageWrapper = styled.section<LandingPageWrapperProps>`
  position: relative;
  width: 100%;

  .life__changing__section {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 5rem 0 4rem 0;

    .life__changing__content {
      display: flex;
      flex-direction: column;
      gap: 25px;

      .title {
        text-align: center;
        font-size: 1.8rem;
        color: #6b7280;
      }

      .cards__wrapper {
        display: flex;
        flex-direction: row;
        gap: 40px;
        justify-content: center;
      }
    }
  }
`;

export const HeroSection = styled.div<HeroSectionWrapperProps>`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(270deg, #000000 0.31%, rgba(0, 0, 0, 0) 69.68%),
      url(${({ backgroundImage }) => backgroundImage}) no-repeat right center;
    background-size: cover;
    transform: scaleX(-1); /* Mirror the image */
    z-index: 0;
    pointer-events: none;
  }

  .hero__section__content {
    position: relative;
    z-index: 1;
    padding: 12rem 0 12rem 0;
    font-family: Montserrat, sans-serif;
    max-width: 43.5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;

    .hero__text {
      font-family: Montserrat, sans-serif;
      font-size: 3.1rem;
      color: #ffffff;
    }

    .hero__sub__section {
      font-size: 1.8rem;
      color: #ffffff;
      font-weight: 600;
      font-family: Montserrat, sans-serif;
    }

    .hero__cta__buttons {
      display: flex;
      gap: 30px;
      margin-top: 1.5rem;
    }
  }
`;

export const PrizeCard = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;
