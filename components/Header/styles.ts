import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
    margin-right: 0.5rem;
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.dark};
    margin: 0;
    
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 200;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const NavLink = styled.a<{ active?: boolean }>`
  color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.dark};
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  margin-left: 1.5rem;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
  position: relative;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ active }) => active ? '100%' : '0'};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transition};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const MobileNavLink = styled(NavLink)`
  margin-left: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  
  span {
    font-weight: 500;
  }
`;

export const AnimatedLogo = styled(motion.div)`
  display: flex;
  align-items: center;
`;

export const AnimatedText = styled(motion.span)`
  display: inline-block;
`;

export const HeaderGradient = styled.div`
  background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  height: 4px;
  width: 100%;
`;
