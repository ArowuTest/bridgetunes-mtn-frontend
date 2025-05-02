import React, { useState, useEffect } from "react"
import { HeaderContainer } from "./styles"
import { LogoSVG } from "@/assets/svgs"
import path from "path"
import Link from "next/link"
import { Button } from "../common/styles"

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <HeaderContainer
      style={{
        boxShadow: isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <HeaderContent>
        <Logo>
          <Link href="/" passHref>
            <a style={{ color: "white", textDecoration: "none" }}>
              MTN MyNumba Don Win
            </a>
          </Link>
        </Logo>

        <NavLinks>
          <Link href="/" passHref>
            <NavLink>Home</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/prizes" passHref>
            <NavLink>Prizes</NavLink>
          </Link>
          <Link href="/winners" passHref>
            <NavLink>Winners</NavLink>
          </Link>
          <Link href="/livestream" passHref>
            <NavLink>Livestream</NavLink>
          </Link>
          <Link href="/dashboard" passHref>
            <NavLink>Dashboard</NavLink>
          </Link>
          <Link href="/faq" passHref>
            <NavLink>FAQ</NavLink>
          </Link>
          <Link href="/contact" passHref>
            <NavLink>Contact</NavLink>
          </Link>
        </NavLinks>

        <ButtonGroup>
          <Link href="/dashboard" passHref>
            <SecondaryButton>Dashboard</SecondaryButton>
          </Link>
          <Link href="/login" passHref>
            <PrimaryButton>
              <FaUser />
              Login
            </PrimaryButton>
          </Link>
        </ButtonGroup>

        <MobileMenuButton onClick={toggleMobileMenu} aria-label="Open menu">
          <FaBars />
        </MobileMenuButton>
      </HeaderContent>

      <Overlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <Logo>Menu</Logo>
          <MobileMenuClose onClick={closeMobileMenu} aria-label="Close menu">
            <FaTimes />
          </MobileMenuClose>
        </MobileMenuHeader>

        <MobileNavLinks>
          <Link href="/" passHref>
            <MobileNavLink onClick={closeMobileMenu}>Home</MobileNavLink>
          </Link>
          <Link href="/about" passHref>
            <MobileNavLink onClick={closeMobileMenu}>About</MobileNavLink>
          </Link>
          <Link href="/prizes" passHref>
            <MobileNavLink onClick={closeMobileMenu}>Prizes</MobileNavLink>
          </Link>
          <Link href="/winners" passHref>
            <MobileNavLink onClick={closeMobileMenu}>Winners</MobileNavLink>
          </Link>
          <Link href="/livestream" passHref>
            <MobileNavLink onClick={closeMobileMenu}>Livestream</MobileNavLink>
          </Link>
          <Link href="/dashboard" passHref>
            <MobileNavLink onClick={closeMobileMenu}>Dashboard</MobileNavLink>
          </Link>
          <Link href="/faq" passHref>
            <MobileNavLink onClick={closeMobileMenu}>FAQ</MobileNavLink>
          </Link>
          <Link href="/contact" passHref>
            <MobileNavLink onClick={closeMobileMenu}>Contact</MobileNavLink>
          </Link>
        </MobileNavLinks>

        <MobileButtonGroup>
          <Link href="/dashboard" passHref>
            <SecondaryButton onClick={closeMobileMenu}>
              Dashboard
            </SecondaryButton>
          </Link>
          <Link href="/login" passHref>
            <PrimaryButton onClick={closeMobileMenu}>
              <FaUser />
              Login
            </PrimaryButton>
          </Link>
        </MobileButtonGroup>
      </MobileMenu>
    </HeaderContainer>
  )
}

export default Header
