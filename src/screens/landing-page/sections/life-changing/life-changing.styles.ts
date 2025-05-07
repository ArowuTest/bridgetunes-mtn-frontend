import styled from "styled-components";

export const LifeChangingSectionWrapper = styled.section`
  .life__changing__section {
    width: 100%;
    position: relative;
    overflow: hidden;
    padding: 5rem 0 5rem 0;

    .life__changing__content {
      display: flex;
      flex-direction: column;
      gap: 40px;

      .cards__wrapper {
        display: flex;
        flex-direction: row;
        gap: 40px;
        justify-content: center;
      }
    }
  }

  @media (max-width: 1024px) {
    .life__changing__section {
      padding: 4rem 0;
      gap: 30px;
    }
  }
  @media (max-width: 768px) {
    .life__changing__section {
      padding: 3rem 0;
    }
  }

  @media (max-width: 600px) {
    .life__changing__section {
      .life__changing__content {
        .cards__wrapper {
          flex-direction: column;
          align-items: center;
          gap: 25px;
        }
      }
    }
  }
`;

export const PrizeCard = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  background-color: #f3f4f6;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 1.5rem 6rem;
  gap: 12px;

  .title {
    font-size: 2rem;
    font-weight: 600;
    color: #6b7280;
  }

  .bottom__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;

    .prize__image {
      max-width: 250px;
    }

    .prize__text {
      background: repeating-linear-gradient(
          rgb(255, 215, 0),
          rgb(221, 121, 0),
          rgb(255, 215, 0) 60%
        )
        text;
      font-size: 2.1rem;
      font-weight: 700;
      -webkit-text-fill-color: transparent;
      font-family: "Montserrat";
      color: rgb(255, 215, 0);
    }

    p {
      text-align: center;
      color: #6b7280;
    }

    .desc {
      font-size: 0.85rem;
    }

    .bottom__text {
      font-size: 0.9rem;
      margin-top: 2px;
    }
  }

  @media (max-width: 1024px) {
    width: 48%;
    padding: 1.5rem 2rem;

    .title {
      font-size: 1.5rem;
    }

    .bottom__section {
      .prize__image {
        max-width: 200px;
      }
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    width: 95%;

    .title {
      font-size: 1.4rem;
    }
  }
`;
