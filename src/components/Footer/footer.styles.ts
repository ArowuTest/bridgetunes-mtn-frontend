import styled from "styled-components";
import { Flex, Input } from "../common/styles";

export const FooterWrapper = styled(Flex)`
  background: #000000;
  padding: 3rem 0 1rem 0;
  width: 100%;

  p,
  a {
    font-family: Open Sans;
    color: #6b7280;
    font-size: 0.84rem;
    font-weight: 500;
    text-align: left;
  }

  a {
    transition: ${({ theme }) => theme.transitions.normal};
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .footer__content__title {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: normal;
  }

  .column__item__width {
    min-width: 300px;
  }

  .footer__content {
    width: 100%;

    .top__footer__content {
      width: 100%;
      border-bottom: 1px solid #231f20a8;
      padding-bottom: 40px;
      flex-wrap: wrap;
      gap: 20px;

      .column__one__footer {
        max-width: 350px;
      }

      .footer__content__list {
        list-style-type: disc;
        padding-left: 1.5em;

        li {
          text-align: left;
          margin-bottom: 6px;
        }
      }

      .stay__updated__box {
        max-width: 270px;

        .stay__updated__text {
          margin-bottom: 14px;
          text-transform: capitalize;
        }
      }
    }

    .bottom__footer__content {
      padding: 1.5rem 0;
      width: 100%;
      flex-wrap: wrap;

      a {
        text-decoration: underline;
      }

      .bottom__footer__links {
        gap: 8rem;
        flex-wrap: wrap;
      }
    }
  }

  @media (max-width: 600px) {
    .footer__content {
      .top__footer__content {
        flex-direction: column;
        gap: 25px;

        .column__one__footer {
          max-width: 100%;
        }

        .stay__updated__box {
          max-width: 330px;
        }
      }

      .bottom__footer__content {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 20px;

        .bottom__footer__links {
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 20px;
        }
      }
    }
  }
`;

export const StyledInput = styled(Input)`
  padding: 0.6rem;
  height: 100%;
  background-color: #fff;
  border: none;
  color: #000;
  font-size: 0.85rem;

  &:focus {
    outline: none;
    border-color: transparent;
    box-shadow: 0 0 0 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 0.85rem;
  }
`;
