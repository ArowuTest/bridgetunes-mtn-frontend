import { Input } from "@/src/components/common/styles";
import styled from "styled-components";

export const PointsAndFAQWrapper = styled.div`
  width: 100%;

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

        .small__input__box {
          max-width: 120px;
          color: #ffcc08;
          text-align: center;
        }

        .result__input__box {
          max-width: 200px;
          background: linear-gradient(90deg, #0056b3 0%, #8b5cf6 100%);
          text-align: center;
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
    .image__wrapper {
      width: 50%;
      position: relative;
      overflow: hidden;

      .money__absolute {
        position: absolute;
        bottom: -130px;
      }
    }

    .content__wrap {
      max-width: 370px;
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
        font-size: 1.1rem;
      }

      .sub__text__2 {
        font-weight: 500;
        color: #6b7280;
        font-size: 0.9rem;
        margin: 20px 0;
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
