import styled from "styled-components";

export const WinningIsEasySectionWrapper = styled.div`
  width: 100%;

  .winning__section {
    padding: 5rem 0 5rem 0;

    .title {
      text-align: center;
      font-size: 1.8rem;
      color: #6b7280;
    }

    .winning__cards__wrapper {
      display: flex;
      gap: 25px;
    }
  }
`;

export const StepCard = styled.div`
  width: 250px;
  padding: 34px 28px;
  background: #0056b3;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;

  .image__wrapper {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

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
    
  }
`;
