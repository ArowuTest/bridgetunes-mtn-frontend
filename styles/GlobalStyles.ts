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
    color: #fff;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.normal};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.primary};
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

  .global-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
  }
`;

export default GlobalStyles;

