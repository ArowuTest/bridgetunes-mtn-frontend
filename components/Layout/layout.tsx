import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { Container } from '../common/styles';
import { LayoutContainer } from './layout.styles';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: calc(100vh - 80px);
  padding-top: 60px;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          <p>
            &copy; {new Date().getFullYear()} Bridgetunes MTN MyNumba Don Win.
            All rights reserved.
          </p>
        </FooterContent>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
