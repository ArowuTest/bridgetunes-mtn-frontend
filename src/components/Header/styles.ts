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

  .logo {
    cursor: pointer;
  }

  .nav__link__wrapper {
    gap: 20px;
    display: flex;

    .link {
      font-size: 0.85rem;
    }

    .link.active {
      color: #ffcc08;
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

  .menu__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 9000;
  }

  .menu__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 80%;
    height: 100%;
    background: #101935;
    z-index: 10000;
    padding: 1rem;
    max-width: 260px;

    .sidebar__link {
      display: block;
      padding: 0.8rem 0;
      font-size: 0.9rem;
      margin-left: 0.3rem;
      cursor: pointer;

      &:first-child {
        margin-top: 1.3rem;
      }
    }

    #active {
      color: #ffcc08;
    }

    .menu__cta__button {
      width: 100%;
      margin-top: 15px;
      color: #ffcc08;
      border: 1px solid #ffcc08;
    }
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
