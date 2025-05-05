import styled from "styled-components";

export const WinnersSectionWrapper = styled.section`
  width: 100%;

  .winners__section {
    padding: 5rem 0 0 0;
    overflow: hidden;

    .next__draw__content {
      padding: 2rem 10rem;
      border-radius: 14px;

      .text {
        color: #fff;
      }

      .prize {
        .price__image {
          max-width: 220px;
        }

        .jackpot__text {
          color: #fff;
          padding-bottom: 10px;
          font-family: Open Sans;
          font-weight: 800;
        }
      }
    }

    .winners__pool__box {
      position: relative;
      width: 100%;
      border-radius: 20px;
      padding: 8px 0;
      z-index: 1;
      overflow: hidden;
      height: fit-content;
      margin-top: 35px;

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 30px;
        padding: 0;
        background: linear-gradient(102.25deg, #ffcc08 11.52%, #ff9100 89.52%);
        z-index: -1;
      }

      .winners__pool__content {
        width: 100%;
        border-radius: 30px;
        width: 100%;
        padding: 5rem 0 5rem 0;

        .winners__card__wrapper {
        }
      }
    }
  }

  @media (max-width: 1024px) {
    .winners__section {
      padding: 4rem 0 0 0;

      .next__draw__content {
        max-width: 100%;
      }
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    .winners__section {
      padding: 3rem 0 0 0;

      .next__draw__content {
        padding: 1.5rem;
        gap: 25px;

        .text {
          font-size: 0.85rem;
        }

        .prize {
          flex-direction: column;
          gap: 8px;

          .price__image {
            max-width: 190px;
          }

          .jackpot__text {
            font-size: 0.9rem;
          }
        }
      }

      .recharge__now__btn {
        padding: 0.7rem 2rem;
        font-size: 0.82rem;
      }

      .winners__pool__box {
        
      }
    }
  }
`;
