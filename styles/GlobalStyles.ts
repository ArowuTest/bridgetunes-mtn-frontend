import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #FFCC00; /* MTN Yellow */
    --secondary-color: #0066CC; /* Bridgetunes Blue */
    --dark-color: #333333;
    --light-color: #F5F5F5;
    --success-color: #28a745;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
    --info-color: #17a2b8;
    --gray-color: #6c757d;
    --white-color: #FFFFFF;
    --black-color: #000000;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: 16px;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.normal};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    transition: ${({ theme }) => theme.transitions.normal};
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .btn {
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark};
    padding: 10px 20px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    cursor: pointer;
    text-align: center;
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    transition: ${({ theme }) => theme.transitions.normal};
  }

  .btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark};
  }

  .btn-secondary {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
  }

  .btn-success {
    background-color: ${({ theme }) => theme.colors.success};
    color: ${({ theme }) => theme.colors.white};
  }

  .btn-danger {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }

  .btn-warning {
    background-color: ${({ theme }) => theme.colors.warning};
    color: ${({ theme }) => theme.colors.dark};
  }

  .btn-info {
    background-color: ${({ theme }) => theme.colors.info};
    color: ${({ theme }) => theme.colors.white};
  }

  .text-center {
    text-align: center;
  }

  .mt-1 {
    margin-top: ${({ theme }) => theme.space.xsmall};
  }

  .mt-2 {
    margin-top: ${({ theme }) => theme.space.small};
  }

  .mt-3 {
    margin-top: ${({ theme }) => theme.space.medium};
  }

  .mt-4 {
    margin-top: ${({ theme }) => theme.space.large};
  }

  .mb-1 {
    margin-bottom: ${({ theme }) => theme.space.xsmall};
  }

  .mb-2 {
    margin-bottom: ${({ theme }) => theme.space.small};
  }

  .mb-3 {
    margin-bottom: ${({ theme }) => theme.space.medium};
  }

  .mb-4 {
    margin-bottom: ${({ theme }) => theme.space.large};
  }

  .p-1 {
    padding: ${({ theme }) => theme.space.xsmall};
  }

  .p-2 {
    padding: ${({ theme }) => theme.space.small};
  }

  .p-3 {
    padding: ${({ theme }) => theme.space.medium};
  }

  .p-4 {
    padding: ${({ theme }) => theme.space.large};
  }

  .card {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.medium};
    padding: ${({ theme }) => theme.space.large};
    margin-bottom: ${({ theme }) => theme.space.large};
  }

  .flex {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .align-center {
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: ${({ theme }) => theme.space.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles;

