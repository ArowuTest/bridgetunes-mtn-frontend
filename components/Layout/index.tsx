import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { Container } from '../common/styles';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: 2rem 0;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        <FooterContent>
          <p>&copy; {new Date().getFullYear()} Bridgetunes MTN MyNumba Don Win. All rights reserved.</p>
        </FooterContent>
      </Footer>
    </>
  );
};

export default Layout;
