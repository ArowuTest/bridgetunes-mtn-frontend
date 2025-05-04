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
