import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaArrowRight } from 'react-icons/fa';
import { Button } from '../components/common/styles';
import Link from 'next/link';

const HeroSection = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.secondary} 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/hero-pattern.svg');
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ theme }) => `${theme.colors.primary}15`};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const HowItWorksSection = styled(Section)`
  background-color: ${({ theme }) => `${theme.colors.light}`};
`;

const StepContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Step = styled(motion.div)`
  display: flex;
  margin-bottom: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
  margin-right: 1.5rem;
  flex-shrink: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 1rem;
  }
`;

const StepContent = styled.div``;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const CTASection = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

// Custom styled button with larger size
const LargeButton = styled(Button)`
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
`;

// Custom styled button with light appearance
const LightButton = styled(LargeButton)`
  background-color: rgba(255, 255, 255, 0.9);
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: white;
  }
`;

// Navigation Menu
const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.colors.dark};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

// Prize Table
const PrizeTable = styled.div`
  margin-top: 2rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const TableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => `${theme.colors.light}`};
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 1rem;
  border-top: 1px solid #eee;
`;

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>MTN MyNumba Don Win | Bridgetunes</title>
        <meta name="description" content="Participate in MTN MyNumba Don Win promotion and get a chance to win amazing prizes!" />
      </Head>
      
      {/* Navigation Menu */}
      <NavBar>
        <Logo>MTN MyNumba Don Win</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/prizes">Prizes</NavLink>
          <NavLink href="/winners">Winners</NavLink>
          <NavLink href="/faq">FAQ</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </NavLinks>
      </NavBar>
      
      <HeroSection>
        <HeroPattern />
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MTN MyNumba Don Win
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Top up your MTN line and get a chance to win amazing prizes every day!
          </Subtitle>
          <ButtonGroup
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/opt-in" passHref>
              <LargeButton variant="secondary">
                <FaPhone style={{ marginRight: '0.5rem' }} />
                Opt-In Now
              </LargeButton>
            </Link>
            <Link href="/dashboard" passHref>
              <LightButton variant="secondary">
                View Dashboard
                <FaArrowRight style={{ marginLeft: '0.5rem' }} />
              </LightButton>
            </Link>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Why Participate?</SectionTitle>
        <FeatureGrid>
          <FeatureCard
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>₦</FeatureIcon>
            <FeatureTitle>Amazing Cash Prizes</FeatureTitle>
            <FeatureDescription>
              Win substantial cash prizes in our daily and weekly draws! Weekday jackpots of ₦1,000,000 
              and Saturday special jackpots of ₦3,000,000, plus many other prizes ranging from 
              ₦75,000 to ₦1,000,000!
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>+</FeatureIcon>
            <FeatureTitle>Simple Participation</FeatureTitle>
            <FeatureDescription>
              Just top up your MTN line and you're automatically entered into the draw.
              The more you top up, the more points you earn! Opt-in to be eligible for the jackpot prizes.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FeatureIcon>★</FeatureIcon>
            <FeatureTitle>Exclusive Rewards</FeatureTitle>
            <FeatureDescription>
              Get access to exclusive MTN rewards and bonuses just by participating
              in the MyNumba Don Win promotion. Special offers for loyal participants!
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
        
        {/* Prize Structure Table */}
        <SectionTitle style={{ marginTop: '4rem' }}>Prize Structure</SectionTitle>
        <PrizeTable>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Prize</TableHeader>
                <TableHeader>Weekday (Mon-Fri)</TableHeader>
                <TableHeader>Saturday Special</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              <TableRow>
                <TableCell>Jackpot (1st Prize)</TableCell>
                <TableCell>₦1,000,000</TableCell>
                <TableCell>₦3,000,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2nd Prize</TableCell>
                <TableCell>₦350,000</TableCell>
                <TableCell>₦1,000,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3rd Prize</TableCell>
                <TableCell>₦150,000</TableCell>
                <TableCell>₦500,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Concession Prizes (7)</TableCell>
                <TableCell>₦75,000 each</TableCell>
                <TableCell>₦100,000 each</TableCell>
              </TableRow>
            </tbody>
          </Table>
        </PrizeTable>
        <p style={{ textAlign: 'center', marginTop: '1rem', color: '#666' }}>
          *Note: You must opt-in to be eligible for jackpot prizes. All prizes are subject to terms and conditions.
        </p>
      </Section>
      
      <HowItWorksSection>
        <SectionTitle>How It Works</SectionTitle>
        <StepContainer>
          <Step
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <StepNumber>1</StepNumber>
            <StepContent>
              <StepTitle>Opt-In to the Promotion</StepTitle>
              <StepDescription>
                Register your MTN number for the MyNumba Don Win promotion through our
                opt-in page or by dialing *123*1#. Opting in is required to be eligible for jackpot prizes!
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StepNumber>2</StepNumber>
            <StepContent>
              <StepTitle>Top Up Your MTN Line</StepTitle>
              <StepDescription>
                Top up your MTN line to earn points. ₦100-199 gives you 1 point,
                ₦200-299 gives you 2 points, and so on. The more points you have,
                the higher your chances of winning!
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <StepNumber>3</StepNumber>
            <StepContent>
              <StepTitle>Participate in Daily & Weekly Draws</StepTitle>
              <StepDescription>
                Your number is automatically entered into draws based on the last digit.
                Monday draws for numbers ending in 0 & 1, Tuesday for 2 & 3, and so on.
                Saturday draws include all numbers with special higher prize amounts!
              </StepDescription>
            </StepContent>
          </Step>
          
          <Step
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <StepNumber>4</StepNumber>
            <StepContent>
              <StepTitle>Receive Your Winnings</StepTitle>
              <StepDescription>
                Winners are notified via SMS and prizes are credited directly to your
                MTN account or through mobile money transfer. Check the dashboard
                regularly to see if you've won!
              </StepDescription>
            </StepContent>
          </Step>
        </StepContainer>
      </HowItWorksSection>
      
      <CTASection>
        <CTATitle>Ready to Win?</CTATitle>
        <CTADescription>
          Join thousands of MTN users who have already won prizes in the
          MyNumba Don Win promotion. Your number could be next!
        </CTADescription>
        <Link href="/opt-in" passHref>
          <LargeButton variant="secondary">
            Opt-In Now
          </LargeButton>
        </Link>
      </CTASection>
    </>
  );
};

export default HomePage;
