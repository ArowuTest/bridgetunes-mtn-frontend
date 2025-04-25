import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const PageTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

export const PageSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 1rem;
  font-weight: 600;
`;

export const CardContent = styled.div`
  margin-bottom: 1rem;
`;

export const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' }>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.primary;
    }
  }};
  color: ${({ theme, variant }) => 
    variant === 'primary' || variant === 'warning' 
      ? theme.colors.dark 
      : theme.colors.white
  };
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(6, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Col = styled.div<{ span?: number }>`
  grid-column: span ${({ span }) => span || 12};
`;

export const Flex = styled.div<{ direction?: 'row' | 'column', justify?: string, align?: string, gap?: string }>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
`;

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 0 auto;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const Badge = styled.span<{ variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' }>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.primary;
    }
  }};
  color: ${({ theme, variant }) => 
    variant === 'primary' || variant === 'warning' 
      ? theme.colors.dark 
      : theme.colors.white
  };
  border-radius: 50px;
  padding: 0.25rem 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  display: inline-block;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1.5rem;
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    font-weight: 600;
    background-color: ${({ theme }) => theme.colors.light};
  }
  
  tr:hover {
    background-color: ${({ theme }) => theme.colors.light};
  }
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.5rem;
`;

export const SuccessMessage = styled.p`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-top: 0.5rem;
`;

export const AnimatedCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #ddd;
  margin: 1.5rem 0;
`;

export const Alert = styled.div<{ variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' }>`
  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return `${theme.colors.primary}20`;
      case 'secondary':
        return `${theme.colors.secondary}20`;
      case 'success':
        return `${theme.colors.success}20`;
      case 'danger':
        return `${theme.colors.danger}20`;
      case 'warning':
        return `${theme.colors.warning}20`;
      default:
        return `${theme.colors.primary}20`;
    }
  }};
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.primary;
    }
  }};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid ${({ theme, variant }) => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      case 'secondary':
        return theme.colors.secondary;
      case 'success':
        return theme.colors.success;
      case 'danger':
        return theme.colors.danger;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.primary;
    }
  }};
`;
