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
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 30px;

  .card__wrapper {
    width: 100%;
    background: linear-gradient(120deg, #101935, #0c0c0c);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    z-index: 2;
    border-radius: 16px;
    max-width: 51rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LoginBanner = styled.img`
  position: fixed;
  right: 0px;
  top: 0px;
  bottom: 0px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const Card = styled.div`
  padding: 3rem 2rem;
  width: 90%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem 1.5rem;
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
      <div className="card__wrapper">
        <Card>{children}</Card>
      </div>
    </Wrapper>
  );
};

export default AuthLayout
