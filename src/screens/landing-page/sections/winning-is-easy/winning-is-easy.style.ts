import styled from "styled-components";
import { motion } from "framer-motion";

export const WinningIsEasySectionWrapper = styled.div`
  width: 100%;

  .winning__section {
    padding: 5rem 0;

    .winning__cards__wrapper {
      display: flex;
      gap: 25px;
      width: 100%;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 1024px) {
    .winning__section {
      padding: 3.5rem 1rem;

      .winning__cards__wrapper {
        justify-content: flex-start;
      }
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    .winning__section {
      .winning__cards__wrapper {
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch;
        column-gap: 8px;
        row-gap: 10px;
      }
    }
  }
`;

export const StepCard = styled(motion.div)`
  width: 250px;
  padding: 34px 28px;
  background: #0056b3;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  .image__wrapper {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;

    .image {
      width: 165px;
    }
  }

  .step {
    font-family: Open Sans;
    font-weight: 700;
    font-size: 1.2rem;
    color: #ffffff;
  }

  .description {
    font-size: 0.85rem;
    text-align: center;
    color: #ffffff;
    text-transform: capitalize;
  }

  &:hover {
    background: #ffcc00;

    .step,
    .description {
      color: #000000;
    }

    .image__wrapper {
      .image {
        scale: 1.2;
      }
    }
  }

  @media (max-width: 1024px) {
    min-width: 240px;
    flex-grow: 1;
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    width: 48%;
    min-width: auto;
    padding: 20px 10px;
    gap: 10px;

    .image__wrapper {
      .image {
        width: 100%;
        max-width: 120px;
      }
    }

    .description {
      font-size: 0.65rem;
    }
  }
`;
