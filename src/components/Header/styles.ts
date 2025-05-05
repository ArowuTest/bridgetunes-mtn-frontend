import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%);
  position: fixed;
  top: 0;
  width: 100%;
  padding: 14px 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .header__wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .nav__link__wrapper {
    gap: 20px;
    display: flex;

    .link {
      font-size: 0.85rem;
    }
  }

  .cta__wrapper {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .mobile__menu__wrap {
    display: none;
  }

  @media (max-width: 1024px) {
    .nav__link__wrapper,
    .cta__wrapper {
      display: none;
    }

    .mobile__menu__wrap {
      display: flex;
      background: #0056b3;
      padding: 7px;
      border-radius: 8px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .logo {
      max-width: 150px;
    }
  }
`;
