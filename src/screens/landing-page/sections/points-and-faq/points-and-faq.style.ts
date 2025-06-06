import { Input } from "@/src/components/common/styles";
import styled from "styled-components";

export const PointsAndFAQWrapper = styled.div`
  width: 100%;

  /* Hide spinner controls in Webkit browsers */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide spinner controls in Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  .calculate__winners__point {
    padding: 4.5rem 0;

    .calculate__winners__content {
      width: fit-content;
      padding: 2rem 8rem;
      border: 1px solid transparent;
      border-radius: 15px;
      overflow: hidden;

      .form__input__wrapper {
        color: #fff;

        .description {
          font-size: 0.9rem;
          text-align: center;
          color: #6b7280;
          text-transform: capitalize;
        }

        .results__wrapper {
          flex-wrap: wrap;
        }

        .small__input__box {
          color: #ffcc08;
          text-align: center;
          font-size: 0.9rem;
          width: fit-content;
          flex-grow: 1;
          width: 120px;
        }

        .result__input__box {
          background: linear-gradient(90deg, #0056b3 0%, #8b5cf6 100%);
          text-align: center;
          font-size: 0.9rem;
          max-width: 100%;
        }

        .tips__text {
          font-size: 0.9rem;
          color: #ffcc08;
          margin: 12px 0;
        }
      }
    }
  }

  .faq__wrapper {
    width: 100%;
    background: linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%);

    .faq__content__wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 4rem 0;

      .faqs__boxes__wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: masonry;
        align-items: flex-start;
        column-count: 2;
        column-gap: 25px;
        width: 100%;
        max-width: 900px;
      }

      .faq-item-wrapper {
        width: 100%;
        break-inside: avoid;
        margin-bottom: 25px;
        box-sizing: border-box;
      }
    }
  }

  .start__winning__box {
    gap: 30px;

    .image__wrapper {
      width: 36%;
      position: relative;

      img {
        width: 100%;
      }
    }

    .content__wrap {
      max-width: 340px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      gap: 7px;

      .title,
      .sub__text,
      .sub__text__2 {
        text-align: left;
        line-height: normal;
        text-transform: capitalize;
      }

      .sub__text {
        font-weight: 500;
        color: #6b7280;
        font-size: 1rem;
      }

      .sub__text__2 {
        font-weight: 500;
        color: #6b7280;
        font-size: 0.9rem;
        margin: 20px 0;
      }
    }
  }

  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 600px) {
    .calculate__winners__point {
      padding: 3rem 0;

      .calculate__winners__content {
        padding: 1.5rem;
        width: 85%;

        .form__input__wrapper {
          .results__wrapper {
            flex-wrap: wrap;
            justify-content: center;
          }

          .result__input__box {
            max-width: calc(100% - 30px);
          }

          .tips__text {
            font-size: 0.75rem;
          }
        }
      }
    }

    .faq__wrapper {
      .faq__content__wrapper {
        gap: 28px;

        .faqs__boxes__wrapper {
          display: flex;
          flex-direction: column;
          gap: 12px;

          .faq-item-wrapper {
            margin: 0px;
          }
        }
      }
    }

    .start__winning__box {
      .start__winning__box__content {
        flex-direction: column;

        .image__wrapper {
          width: 100%;
        }

        .content__wrap {
          justify-content: center;
          align-items: center;

          h1,
          p {
            text-align: center;
          }
        }
      }
    }
  }
`;

export const StyledInput = styled(Input)`
  padding: 1rem;
  height: 100%;
  background-color: #292f40;
  border: none;
  color: #fff;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;
