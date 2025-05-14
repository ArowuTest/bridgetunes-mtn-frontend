import React, { ReactNode } from "react"
import styled from "styled-components"

interface LayoutProps {
  children: ReactNode
}

const Wrapper = styled.div`
  height: 100dvh;
  background: black url("/images/pattern-bg.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 30px;

  .max__content__wrapper {
    max-width: ${({ theme }) => theme.breakpoints.fullhd || "1400px"};
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    align-items: center;

    .card__wrapper {
      width: 100%;
      background: linear-gradient(120deg, #101935, #0c0c0c);
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      border-radius: 16px;
      max-width: 51rem;
      z-index: 2;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: 100dvh;
    max-width: 52rem;

    .max__content__wrapper {
      .card__wrapper {
        height: fit-content;
        margin-top: 40px;
      }
    }
  }
`;

const LoginBanner = styled.img`
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 1;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    top: -110px;
    height: fit-content;
  }
`;

const Card = styled.div`
  padding: 3rem 2rem;
  width: 90%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`;

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <LoginBanner src="/images/auth/auth-banner.png" alt="login" />
      <div className="max__content__wrapper">
        <div className="card__wrapper">
          <Card>{children}</Card>
        </div>
      </div>
    </Wrapper>
  );
};

export default AuthLayout
