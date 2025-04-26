import styled from 'styled-components';
// ================= CONTAINER =================
export const Container = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.fullhd || '1400px'};
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 100%;
    padding: 0 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 1rem;
  }
`;

// ================= TEXTAREA =================
export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions?.fast || 'all 0.2s ease-in-out'};
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}30`};
  }
`;

// ================= TABLE =================
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;

  th {
    background: ${({ theme }) => theme.colors.background};
    padding: 1rem;
    text-align: left;
    border-bottom: 2px solid ${({ theme }) => theme.colors.grayLight};
  }

  td {
    padding: 0.75rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    overflow-x: auto;
    display: block;
  }
`;
// ================= BADGE COMPONENT =================
export const Badge = styled.span<{ variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' }>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  /* Background colors based on variant */
  background-color: ${({ theme, variant = 'primary' }) => {
    switch (variant) {
      case 'secondary': return theme.colors.secondaryLight;
      case 'success': return theme.colors.successLight;
      case 'danger': return theme.colors.dangerLight;
      case 'warning': return theme.colors.warningLight;
      case 'info': return theme.colors.infoLight;
      default: return theme.colors.primaryLight;
    }
  }};

  /* Text colors based on variant */
  color: ${({ theme, variant = 'primary' }) => {
    switch (variant) {
      case 'secondary': return theme.colors.secondaryDark;
      case 'success': return theme.colors.successDark;
      case 'danger': return theme.colors.dangerDark;
      case 'warning': return theme.colors.warningDark;
      case 'info': return theme.colors.infoDark;
      default: return theme.colors.primaryDark;
    }
  }};
`;

// Fixed styled components with optional chaining and fallbacks
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Col = styled.div<{ span?: number }>`
  grid-column: span ${({ span }) => span || 12};
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '0.375rem'};
  box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions?.normal || 'all 0.3s ease-in-out'};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'warning':
        return theme.colors.warning;
      case 'info':
        return theme.colors.info;
      default:
        return theme.colors.primary;
    }
  }};
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'warning':
        return theme.colors.dark;
      default:
        return theme.colors.white;
    }
  }};
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions?.fast || 'all 0.2s ease-in-out'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}30`};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  font-size: 1rem;
  transition: ${({ theme }) => theme.transitions?.fast || 'all 0.2s ease-in-out'};
  background-color: ${({ theme }) => theme.colors.white};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => `${theme.colors.primary}30`};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const Alert = styled.div<{ variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' }>`
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return `${theme.colors.secondary}20`;
      case 'success':
        return `${theme.colors.success}20`;
      case 'danger':
        return `${theme.colors.danger}20`;
      case 'warning':
        return `${theme.colors.warning}20`;
      case 'info':
        return `${theme.colors.info}20`;
      default:
        return `${theme.colors.primary}20`;
    }
  }};
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'warning':
        return theme.colors.warning;
      case 'info':
        return theme.colors.info;
      default:
        return theme.colors.primary;
    }
  }};
`;

export const Flex = styled.div<{ direction?: 'row' | 'column', justify?: string, align?: string, gap?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
`;

export const Spinner = styled.div`
  border: 3px solid ${({ theme }) => `${theme.colors.primary}30`};
  border-top: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

