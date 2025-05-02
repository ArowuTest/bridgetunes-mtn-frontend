import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaArrowRight } from 'react-icons/fa';
import { Card, Button, Form, FormGroup, Label, Input, Alert } from '../components/common/styles';
import Layout from "../components/Layout/layout";
import { authAPI } from "../network/api";

const RegisterContainer = styled.div`
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

const Register: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'phone' | 'email'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneVerificationSent, setPhoneVerificationSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleTabChange = (tab: 'phone' | 'email') => {
    setActiveTab(tab);
    setError(null);
    setSuccess(null);
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
      setSuccess('Verification code sent to your phone');
    } catch (error) {
      console.error('Failed to send verification:', error);
      setError('Failed to send verification code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const validatePhoneRegistration = () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid phone number');
      return false;
    }
    
    if (!phoneVerificationSent) {
      setError('Please verify your phone number');
      return false;
    }
    
    const otpValue = otp.join('');
    if (otpValue.length !== 4) {
      setError('Please enter the 4-digit verification code');
      return false;
    }
    
    if (otpValue !== '1234') { // In a real app, this would be validated against the API
      setError('Invalid verification code');
      return false;
    }
    
    return true;
  };

  const validateEmailRegistration = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return false;
    }
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setError(null);
    setSuccess(null);
    
    let isValid = false;
    
    if (activeTab === 'phone') {
      isValid = validatePhoneRegistration();
    } else {
      isValid = validateEmailRegistration();
    }
    
    if (!isValid) return;
    
    setLoading(true);
    
    try {
      // In a real app, this would call the API to register the user
      // For now, we'll simulate it
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (activeTab === 'phone') {
        // Register with phone
        // await authAPI.registerWithPhone({ phoneNumber, otp: otp.join('') });
      } else {
        // Register with email
        // await authAPI.registerWithEmail({ name, email, password });
      }
      
      setSuccess('Registration successful! Redirecting to login...');
      
      // Redirect to login after a short delay
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Register | MTN MyNumba Don Win</title>
      </Head>
      
      <RegisterContainer>
        <Card>
          <CardTitle>Create Your Account</CardTitle>
          
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
          
          {success && (
            <Alert variant="success" style={{ marginBottom: '1.5rem' }}>
              {success}
            </Alert>
          )}
          
          <Form onSubmit={handleRegister}>
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
                  <Label htmlFor="name">Full Name</Label>
                  <InputGroup>
                    <InputIcon>
                      <FaUser />
                    </InputIcon>
                    <StyledInput
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                
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
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <InputGroup>
                    <InputIcon>
                      <FaLock />
                    </InputIcon>
                    <StyledInput
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
              </>
            )}
            
            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              style={{ width: '100%' }}
            >
              {loading ? 'Processing...' : 'Create Account'}
              {!loading && <FaArrowRight style={{ marginLeft: '0.5rem' }} />}
            </Button>
          </Form>
          
          <BottomText>
            Already have an account? <Link href="/login">Log In</Link>
          </BottomText>
        </Card>
      </RegisterContainer>
    </Layout>
  );
};

export default Register;
