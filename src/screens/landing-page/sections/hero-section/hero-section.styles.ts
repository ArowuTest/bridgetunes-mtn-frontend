import styled from "styled-components";

interface HeroSectionWrapperProps {
  backgroundImage: string;
}

export const HeroSectionWrapper = styled.div<HeroSectionWrapperProps>`
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

  .confettiImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 0;
    opacity: 0.7;
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

  @media (max-width: 1024px) {
    .hero__section__content {
      padding: 9rem 0 9rem 0;
      max-width: 57%;

      .hero__text {
        font-size: 2.8rem;
      }

      .hero__sub__section {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 820px) {
    &::before {
      background: linear-gradient(to top, #000000 10%, rgba(0, 0, 0, 0) 100%),
        linear-gradient(290deg, #000000 0.31%, rgba(0, 0, 0, 0) 69.68%),
        url(${({ backgroundImage }) => backgroundImage}) no-repeat center;
      background-size: cover;
    }

    .hero__section__content {
      padding: 16.5rem 0 3rem 0;
      max-width: 100%;
      gap: 15px;

      .hero__text {
        font-size: 2rem;
      }

      .hero__sub__section {
        font-size: 1.15rem;
        font-weight: 500;
      }

      .hero__cta__buttons {
        gap: 10px;

        button {
          padding: 12px 20px;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
