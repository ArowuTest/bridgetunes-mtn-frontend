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
`;
