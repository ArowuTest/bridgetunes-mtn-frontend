import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./styles";
import { LogoSVG } from "@/assets/svgs";
import path from "path";
import Link from "next/link";
import { Button, Container } from "../common/styles";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/about",
      label: "About",
    },
    {
      path: "/opt-in-experience",
      label: "Opt-in Experience",
    },
    {
      path: "/draw-calendar",
      label: "Draw Calendar",
    },
    {
      path: "/prizes",
      label: "Prizes",
    },
    {
      path: "/winners",
      label: "Winners",
    },
    {
      path: "/livestream",
      label: "Livestream",
    },
  ];

  return (
    <HeaderContainer>
      <Container>
        <div className="header__wrapper">
          <LogoSVG />
          <nav className="nav__link__wrapper">
            {links.map((link) => (
              <Link key={link.path} href={link.path} className="link">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="cta__wrapper">
            <Button>Dashboard</Button>
            <Button
              color="#0056B3"
              backgroundColor="transparent"
              border="1px solid #2C73DB"
            >
              Login
            </Button>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
