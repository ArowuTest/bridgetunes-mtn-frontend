import styled from 'styled-components';

// Fixed version with optional chaining and fallback
export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices?.sticky || 1020};
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    height: 40px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.white};
    flex-direction: column;
    padding: 1rem;
    z-index: ${({ theme }) => theme.zIndices?.modal || 1050};
    overflow-y: auto;
  }
`;
