import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaEnvelope, FaLock, FaPhone, FaArrowRight } from 'react-icons/fa';
import { Card, Button, Form, FormGroup, Label, Input, Alert } from '../components/common/styles';
import Layout from "../components/Layout/layout";
import { useAuth } from '../contexts/AuthContext';

const LoginContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.gray};
  font-weight: ${({ active }) => active ? '600' : '400'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InputGroup = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray};
`;

const StyledInput = styled(Input)`
  padding-left: 2.5rem;
`;

const VerifyButton = styled(Button)`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
`;

const OtpContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const OtpInput = styled(Input)`
  width: 3rem;
  text-align: center;
  font-size: 1.25rem;
  padding: 0.5rem 0;
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 1.5rem;
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-size: 0.875rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.gray};
  
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneVerificationSent, setPhoneVerificationSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTabChange = (tab: 'phone' | 'email') => {
    setActiveTab(tab);
    setError(null);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleSendVerification = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would call the API to send an OTP
      // For now, we'll simulate it
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setPhoneVerificationSent(true);
    } catch (error) {
      console.error('Failed to send verification:', error);
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError(null);
    
    if (activeTab === 'phone') {
      if (!phoneNumber || phoneNumber.length < 10) {
        setError('Please enter a valid phone number');
        return;
      }
      
      if (!phoneVerificationSent) {
        setError('Please verify your phone number');
        return;
      }
      
      const otpValue = otp.join('');
      if (otpValue.length !== 4) {
        setError('Please enter the 4-digit verification code');
        return;
      }
      
      setLoading(true);
      
      try {
        // In a real app, this would call the API to verify the OTP
        // For now, we'll simulate it with a hardcoded OTP
        if (otpValue === '1234') {
          // Simulate successful login
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Redirect to dashboard
          router.push('/dashboard');
        } else {
          setError('Invalid verification code');
        }
      } catch (error) {
        console.error('Login failed:', error);
        setError('Login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address');
        return;
      }
      
      if (!password) {
        setError('Please enter your password');
        return;
      }
      
      setLoading(true);
      
      try {
        // Use the login function from AuthContext
        await login(email, password);
        
        // Redirect to dashboard
        router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
        setError('Invalid email or password');
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>Login | MTN MyNumba Don Win</title>
      </Head>
      
      <LoginContainer>
        <Card>
          <CardTitle>Log In to Your Account</CardTitle>
          
          <TabContainer>
            <Tab 
              active={activeTab === 'phone'} 
              onClick={() => handleTabChange('phone')}
            >
              Phone Number
            </Tab>
            <Tab 
              active={activeTab === 'email'} 
              onClick={() => handleTabChange('email')}
            >
              Email & Password
            </Tab>
          </TabContainer>
          
          {error && (
            <Alert variant="danger" style={{ marginBottom: '1.5rem' }}>
              {error}
            </Alert>
          )}
          
          <Form onSubmit={handleLogin}>
            {activeTab === 'phone' ? (
              <>
                <FormGroup>
                  <Label htmlFor="phoneNumber">MTN Phone Number</Label>
                  <InputGroup>
                    <InputIcon>
                      <FaPhone />
                    </InputIcon>
                    <StyledInput
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter your MTN number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      disabled={phoneVerificationSent}
                    />
                    {!phoneVerificationSent && (
                      <VerifyButton
                        type="button"
                        variant="primary"
                        onClick={handleSendVerification}
                        disabled={loading}
                      >
                        Verify
                      </VerifyButton>
                    )}
                  </InputGroup>
                </FormGroup>
                
                {phoneVerificationSent && (
                  <>
                    <FormGroup>
                      <Label>Verification Code</Label>
                      <OtpContainer>
                        {otp.map((digit, index) => (
                          <OtpInput
                            key={index}
                            id={`otp-${index}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                          />
                        ))}
                      </OtpContainer>
                      <small style={{ color: '#666' }}>
                        Enter the 4-digit code sent to your phone
                      </small>
                    </FormGroup>
                  </>
                )}
              </>
            ) : (
              <>
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <InputGroup>
                    <InputIcon>
                      <FaEnvelope />
                    </InputIcon>
                    <StyledInput
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="password">Password</Label>
                  <InputGroup>
                    <InputIcon>
                      <FaLock />
                    </InputIcon>
                    <StyledInput
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                
                <ForgotPassword>
                  <Link href="/forgot-password">Forgot password?</Link>
                </ForgotPassword>
              </>
            )}
            
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              style={{ width: '100%' }}
            >
              {loading ? 'Processing...' : 'Log In'}
              {!loading && <FaArrowRight style={{ marginLeft: '0.5rem' }} />}
            </Button>
          </Form>
          
          <BottomText>
            Don't have an account? <Link href="/register">Sign Up</Link>
          </BottomText>
        </Card>
      </LoginContainer>
    </Layout>
  );
};

export default Login;

