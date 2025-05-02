import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: linear-gradient(258.42deg, #000000 -129.38%, #101935 93.71%);
  position: fixed;
  top: 0;
  width: 100%;
  padding: 14px 0;
  z-index: 9999;
  display: flex;
  justify-content: center;

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
`;

