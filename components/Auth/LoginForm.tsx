import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { Card, CardTitle, Button, Form, FormGroup, Label, Input, Alert, Spinner } from '../common/styles';
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/router';

const LoginContainer = styled(Card)`
  max-width: 500px;
  margin: 0 auto;
`;

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login, loading } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    setError(null);
    
    try {
      await login(username, password);
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'Invalid username or password');
    }
  };

  return (
    <LoginContainer>
      <CardTitle>Admin Login</CardTitle>
      
      <p style={{ marginBottom: '1.5rem' }}>
        Enter your credentials to access the MTN MyNumba Don Win admin dashboard.
      </p>
      
      {error && (
        <Alert variant="danger" style={{ marginBottom: '1rem' }}>
          {error}
        </Alert>
      )}
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            disabled={loading}
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            disabled={loading}
          />
        </FormGroup>
        
        <Button
          variant="primary"
          type="submit"
          disabled={loading}
          style={{ width: '100%' }}
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              <FaSignInAlt style={{ marginRight: '0.5rem' }} />
              Login
            </>
          )}
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
