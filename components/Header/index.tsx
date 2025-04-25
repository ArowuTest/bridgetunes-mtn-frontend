import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { 
  Header as HeaderContainer,
  HeaderContainer as Container,
  Logo,
  Nav,
  NavLink,
  MenuButton,
  MobileNav,
  MobileNavHeader,
  MobileNavLinks,
  MobileNavLink,
  CloseButton,
  AnimatedLogo,
  AnimatedText,
  HeaderGradient
} from './styles';
import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const logoVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const mobileNavVariants = {
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  return (
    <>
      <HeaderContainer>
        <Container>
          <Link href="/" passHref>
            <Logo>
              <AnimatedLogo
                initial="hidden"
                animate="visible"
                variants={logoVariants}
              >
                <h1>
                  <AnimatedText variants={letterVariants}>M</AnimatedText>
                  <AnimatedText variants={letterVariants}>T</AnimatedText>
                  <AnimatedText variants={letterVariants}>N</AnimatedText>
                  &nbsp;
                  <AnimatedText variants={letterVariants}>M</AnimatedText>
                  <AnimatedText variants={letterVariants}>y</AnimatedText>
                  <AnimatedText variants={letterVariants}>N</AnimatedText>
                  <AnimatedText variants={letterVariants}>u</AnimatedText>
                  <AnimatedText variants={letterVariants}>m</AnimatedText>
                  <AnimatedText variants={letterVariants}>b</AnimatedText>
                  <AnimatedText variants={letterVariants}>a</AnimatedText>
                  &nbsp;
                  <AnimatedText variants={letterVariants}>D</AnimatedText>
                  <AnimatedText variants={letterVariants}>o</AnimatedText>
                  <AnimatedText variants={letterVariants}>n</AnimatedText>
                  &nbsp;
                  <AnimatedText variants={letterVariants}>W</AnimatedText>
                  <AnimatedText variants={letterVariants}>i</AnimatedText>
                  <AnimatedText variants={letterVariants}>n</AnimatedText>
                </h1>
              </AnimatedLogo>
            </Logo>
          </Link>

          <Nav>
            <Link href="/" passHref>
              <NavLink active={router.pathname === '/'}>Home</NavLink>
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/dashboard" passHref>
                  <NavLink active={router.pathname === '/dashboard'}>Dashboard</NavLink>
                </Link>
                <Link href="/draw-management" passHref>
                  <NavLink active={router.pathname === '/draw-management'}>Draw Management</NavLink>
                </Link>
                <Link href="/notification-management" passHref>
                  <NavLink active={router.pathname === '/notification-management'}>Notifications</NavLink>
                </Link>
                <NavLink href="#" onClick={handleLogout}>Logout</NavLink>
              </>
            ) : (
              <>
                <Link href="/opt-in" passHref>
                  <NavLink active={router.pathname === '/opt-in'}>Opt-In</NavLink>
                </Link>
                <Link href="/login" passHref>
                  <NavLink active={router.pathname === '/login'}>Login</NavLink>
                </Link>
              </>
            )}
          </Nav>

          <MenuButton onClick={toggleMenu}>
            <FaBars size={24} />
          </MenuButton>
        </Container>
        <HeaderGradient />
      </HeaderContainer>

      <MobileNav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileNavVariants}
      >
        <MobileNavHeader>
          <Logo>
            <h1>MTN <span>MyNumba Don Win</span></h1>
          </Logo>
          <CloseButton onClick={closeMenu}>
            <FaTimes size={24} />
          </CloseButton>
        </MobileNavHeader>

        <MobileNavLinks>
          <Link href="/" passHref>
            <MobileNavLink active={router.pathname === '/'} onClick={closeMenu}>Home</MobileNavLink>
          </Link>
          {isAuthenticated ? (
            <>
              <Link href="/dashboard" passHref>
                <MobileNavLink active={router.pathname === '/dashboard'} onClick={closeMenu}>Dashboard</MobileNavLink>
              </Link>
              <Link href="/draw-management" passHref>
                <MobileNavLink active={router.pathname === '/draw-management'} onClick={closeMenu}>Draw Management</MobileNavLink>
              </Link>
              <Link href="/notification-management" passHref>
                <MobileNavLink active={router.pathname === '/notification-management'} onClick={closeMenu}>Notifications</MobileNavLink>
              </Link>
              <MobileNavLink href="#" onClick={() => { closeMenu(); handleLogout(); }}>Logout</MobileNavLink>
            </>
          ) : (
            <>
              <Link href="/opt-in" passHref>
                <MobileNavLink active={router.pathname === '/opt-in'} onClick={closeMenu}>Opt-In</MobileNavLink>
              </Link>
              <Link href="/login" passHref>
                <MobileNavLink active={router.pathname === '/login'} onClick={closeMenu}>Login</MobileNavLink>
              </Link>
            </>
          )}
        </MobileNavLinks>
      </MobileNav>
    </>
  );
};

export default Header;
