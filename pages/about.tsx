import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Header from '../components/Header';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -0.75rem;
    left: 0;
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
`;

const ImageContainer = styled.div`
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
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

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const AboutPage: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>About | MTN MyNumba Don Win</title>
        <meta name="description" content="Learn about the MTN MyNumba Don Win promotion, how it works, and the team behind it." />
      </Head>
      
      <Header />
      
      <MainContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>About MTN MyNumba Don Win</PageTitle>
          
          <Section>
            <Paragraph>
              MTN MyNumba Don Win is an exciting promotion designed to reward MTN customers for their loyalty. 
              Launched in partnership with Bridgetunes, this promotion gives MTN subscribers the chance to win 
              amazing cash prizes simply by topping up their MTN lines.
            </Paragraph>
            
            <Paragraph>
              The promotion runs daily draws from Monday to Friday, with special higher-value draws every Saturday. 
              With a transparent draw process and substantial prize pool, MTN MyNumba Don Win has quickly become 
              one of the most popular promotions in Nigeria.
            </Paragraph>
            
            <ImageContainer>
              <ResponsiveImage src="/images/about-banner.jpg" alt="MTN MyNumba Don Win Promotion" />
            </ImageContainer>
          </Section>
          
          <Section>
            <SectionTitle>Our Mission</SectionTitle>
            <Paragraph>
              Our mission is to create a fair, transparent, and exciting promotion that rewards MTN customers 
              for their continued support. We believe in giving back to our community and creating opportunities 
              for our customers to improve their lives through substantial cash prizes.
            </Paragraph>
            <Paragraph>
              We are committed to maintaining the highest standards of integrity in our draw process, ensuring 
              that every participant has a fair chance to win based on the established rules and criteria.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>Key Features</SectionTitle>
            <FeatureGrid>
              <FeatureCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FeatureTitle>Daily & Weekly Draws</FeatureTitle>
                <FeatureDescription>
                  Participate in daily draws Monday through Friday, with special higher-value draws every Saturday. 
                  Each draw is conducted transparently and winners are announced promptly.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FeatureTitle>Substantial Prize Pool</FeatureTitle>
                <FeatureDescription>
                  Win from our generous prize pool, including weekday jackpots of ₦1,000,000 and Saturday special 
                  jackpots of ₦3,000,000, plus many other prizes ranging from ₦75,000 to ₦1,000,000.
                </FeatureDescription>
              </FeatureCard>
              
              <FeatureCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FeatureTitle>Simple Participation</FeatureTitle>
                <FeatureDescription>
                  Joining is easy! Simply top up your MTN line to be automatically entered into draws. 
                  Opt-in to be eligible for jackpot prizes. The more you top up, the more points you earn.
                </FeatureDescription>
              </FeatureCard>
            </FeatureGrid>
          </Section>
          
          <Section>
            <SectionTitle>How We Select Winners</SectionTitle>
            <Paragraph>
              Our draw process is designed to be completely fair and transparent. Winners are selected using a 
              random number generator that picks from the pool of eligible participants. For daily draws, numbers 
              are filtered based on the last digit (Monday draws for numbers ending in 0 & 1, Tuesday for 2 & 3, etc.).
            </Paragraph>
            <Paragraph>
              All draws are conducted under the supervision of regulatory authorities to ensure compliance with 
              all applicable laws and regulations. Winners are notified via SMS and announced on our website and 
              social media channels.
            </Paragraph>
            <Paragraph>
              For the jackpot prize, winners must have opted in to be eligible. If a non-opted-in participant is 
              selected for the jackpot, the prize rolls over to the next draw, increasing the potential winnings.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>About MTN Nigeria</SectionTitle>
            <Paragraph>
              MTN Nigeria is a leading provider of communication services, offering a wide range of voice, data, 
              digital, and mobile financial services. As one of Nigeria's most admired brands, MTN is committed to 
              delivering the benefits of modern connected life to customers across the country.
            </Paragraph>
            <Paragraph>
              With a customer base of over 70 million, MTN Nigeria continues to invest in expanding its network 
              coverage and capacity to deliver consistent quality service nationwide. The company is dedicated to 
              supporting Nigeria's development through various corporate social responsibility initiatives.
            </Paragraph>
          </Section>
          
          <Section>
            <SectionTitle>About Bridgetunes</SectionTitle>
            <Paragraph>
              Bridgetunes is a leading technology partner specializing in innovative digital solutions for 
              telecommunications and marketing campaigns. With expertise in developing and managing promotional 
              platforms, Bridgetunes has partnered with MTN Nigeria to create and operate the MyNumba Don Win promotion.
            </Paragraph>
            <Paragraph>
              The Bridgetunes team brings years of experience in creating engaging, transparent, and user-friendly 
              promotional campaigns that deliver value to both businesses and their customers.
            </Paragraph>
          </Section>
        </motion.div>
      </MainContent>
    </PageContainer>
  );
};

export default AboutPage;
