import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./styles";
import { LogoSVG } from "@/src/assets/svgs/index";
import path from "path";
import Link from "next/link";
import { Button, Container, Flex } from "../common/styles";
import { useAuth } from "@/src/contexts/AuthContext";
import { useRouter } from "next/router";
import { RxHamburgerMenu as MenuIcon } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

const Header: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { pathname, push } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/opt-in-experience", label: "Opt-in Experience" },
    { path: "/draw-calendar", label: "Draw Calendar" },
    { path: "/prizes", label: "Prizes" },
    { path: "/winners", label: "Winners" },
    { path: "/livestream", label: "Livestream" },
  ];

  const mobileMenuVariants = {
    initial: { x: "-100%" },
    animate: { x: 0, transition: { duration: 0.3 } },
    exit: { x: "-100%", transition: { duration: 0.3 } },
  };

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <HeaderContainer>
      <Container>
        <div className="header__wrapper">
          <LogoSVG className="logo" onClick={() => push("/")} />
          <nav className="nav__link__wrapper">
            {links.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`link ${pathname === link.path ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="cta__wrapper">
            {isAuthenticated ? (
              <Button>Dashboard</Button>
            ) : (
              <Button
                color="#0056B3"
                backgroundColor="transparent"
                border="1px solid #2C73DB"
                onClick={() => push("/login")}
              >
                Login
              </Button>
            )}
          </div>
          <Flex
            direction="row"
            align="center"
            justify="center"
            className="mobile__menu__wrap"
          >
            {!isMobileMenuOpen ? (
              <MenuIcon
                size={17}
                strokeWidth="1px"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            ) : (
              <CloseIcon
                size={18}
                strokeWidth="1px"
                onClick={() => setIsMobileMenuOpen(false)}
              />
            )}
          </Flex>
        </div>
      </Container>

      {/* Mobile Menu and Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="menu__overlay"
            />
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={mobileMenuVariants}
              className="menu__wrapper"
            >
              <LogoSVG className="logo" onClick={() => push("/")} />
              <nav>
                {links.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="sidebar__link"
                    id={`${pathname === link.path ? "active" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
