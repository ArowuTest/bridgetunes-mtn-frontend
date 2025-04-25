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
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--light-color);
    color: var(--dark-color);
    line-height: 1.6;
    font-size: 16px;
  }

  a {
    color: var(--secondary-color);
    text-decoration: none;
    transition: var(--transition);
  }

  a:hover {
    color: var(--primary-color);
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: var(--border-radius);
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 600;
    transition: var(--transition);
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
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
    background-color: var(--primary-color);
    color: var(--dark-color);
    padding: 10px 20px;
    border: none;
    border-radius: var(--border-radius);
    cursor: pointer;
    text-align: center;
    font-weight: 600;
    transition: var(--transition);
  }

  .btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  .btn-primary {
    background-color: var(--primary-color);
    color: var(--dark-color);
  }

  .btn-secondary {
    background-color: var(--secondary-color);
    color: var(--white-color);
  }

  .btn-success {
    background-color: var(--success-color);
    color: var(--white-color);
  }

  .btn-danger {
    background-color: var(--danger-color);
    color: var(--white-color);
  }

  .btn-warning {
    background-color: var(--warning-color);
    color: var(--dark-color);
  }

  .btn-info {
    background-color: var(--info-color);
    color: var(--white-color);
  }

  .text-center {
    text-align: center;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mt-3 {
    margin-top: 1.5rem;
  }

  .mt-4 {
    margin-top: 2rem;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 2rem;
  }

  .p-1 {
    padding: 0.5rem;
  }

  .p-2 {
    padding: 1rem;
  }

  .p-3 {
    padding: 1.5rem;
  }

  .p-4 {
    padding: 2rem;
  }

  .card {
    background-color: var(--white-color);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
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
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default GlobalStyles;
