import React, { ReactNode } from "react";
import styled from "styled-components";
import Header from "@/src/components/Header";
import { LayoutContainer } from "@/src/components/Layout/layout.styles";
import { Footer } from "../Footer/footer";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: calc(100vh - 80px);
  padding-top: 60px;
`;


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
