import React, { ReactNode } from "react"
import styled from "styled-components"

interface LayoutProps {
  children: ReactNode
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: black url("/images/pattern-bg.png") no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Card = styled.div`
  background: linear-gradient(120deg, #101935, #0c0c0c);
  padding: 3rem 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 40rem;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
  }
`

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  )
}

export default AuthLayout
