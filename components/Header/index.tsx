import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
`;

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.colors.dark};
  padding: 2rem;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenuClose = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileButtonGroup = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: auto;
  }
`;

const Button = styled.a`
  padding: 0.5rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.dark};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 999;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <HeaderContainer style={{ boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none' }}>
      <HeaderContent>
        <Logo>
          <Link href="/" passHref>
            <a style={{ color: 'white', textDecoration: 'none' }}>
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
            <SecondaryButton>
              Dashboard
            </SecondaryButton>
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
  );
};

export default Header;

