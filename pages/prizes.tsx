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

// Prize Table
const PrizeTable = styled.div`
  margin: 2rem 0;
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

const PrizeCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
`;

const PrizeCardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PrizeCardAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const PrizeCardDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
`;

const PrizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => `${theme.colors.light}`};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const PrizesPage: React.FC = () => {
  return (
    <PageContainer>
      <Head>
        <title>Prizes | MTN MyNumba Don Win</title>
        <meta name="description" content="Discover the amazing prizes you can win in the MTN MyNumba Don Win promotion." />
      </Head>
      
      <Header />
      
      <MainContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Prizes</PageTitle>
          
          <Section>
            <Paragraph>
              MTN MyNumba Don Win offers substantial cash prizes through our daily and weekly draws. 
              Our prize structure is designed to reward as many participants as possible, with different 
              prize tiers and special Saturday draws with even higher prize amounts.
            </Paragraph>
            
            <InfoBox>
              <strong>Important:</strong> To be eligible for the jackpot prize, you must opt-in to the promotion. 
              If a non-opted-in participant is selected for the jackpot, the prize rolls over to the next draw, 
              increasing the potential winnings!
            </InfoBox>
          </Section>
          
          <Section>
            <SectionTitle>Prize Structure</SectionTitle>
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
                    <TableCell>Concession Prize #1</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Concession Prize #2</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Concession Prize #3</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Concession Prize #4</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Concession Prize #5</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Concession Prize #6</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Concession Prize #7</TableCell>
                    <TableCell>₦75,000</TableCell>
                    <TableCell>₦100,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell><strong>TOTAL</strong></TableCell>
                    <TableCell><strong>₦2,025,000</strong></TableCell>
                    <TableCell><strong>₦5,200,000</strong></TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </PrizeTable>
          </Section>
          
          <Section>
            <SectionTitle>Featured Prizes</SectionTitle>
            <PrizeGrid>
              <PrizeCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <PrizeCardTitle>Weekday Jackpot</PrizeCardTitle>
                <PrizeCardAmount>₦1,000,000</PrizeCardAmount>
                <PrizeCardDescription>
                  Our weekday jackpot is awarded to one lucky winner in each daily draw from Monday to Friday. 
                  Remember, you must opt-in to be eligible for this prize!
                </PrizeCardDescription>
              </PrizeCard>
              
              <PrizeCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <PrizeCardTitle>Saturday Special Jackpot</PrizeCardTitle>
                <PrizeCardAmount>₦3,000,000</PrizeCardAmount>
                <PrizeCardDescription>
                  Our Saturday special jackpot is three times the value of weekday jackpots! 
                  Don't miss your chance to win big in our weekend draws.
                </PrizeCardDescription>
              </PrizeCard>
              
              <PrizeCard
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <PrizeCardTitle>Rollover Jackpots</PrizeCardTitle>
                <PrizeCardAmount>₦1,000,000+</PrizeCardAmount>
                <PrizeCardDescription>
                  If a non-opted-in participant is selected for the jackpot, the prize rolls over to the next draw, 
                  potentially creating even larger jackpot amounts!
                </PrizeCardDescription>
              </PrizeCard>
            </PrizeGrid>
          </Section>
          
          <Section>
            <SectionTitle>How to Increase Your Chances</SectionTitle>
            <Paragraph>
              The more you top up your MTN line, the more points you earn, and the higher your chances of winning! 
              Here's how points are allocated:
            </Paragraph>
            <PrizeTable>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>Top-up Amount</TableHeader>
                    <TableHeader>Points Earned</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  <TableRow>
                    <TableCell>₦100 - ₦199</TableCell>
                    <TableCell>1 point</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>₦200 - ₦499</TableCell>
                    <TableCell>2 points</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>₦500 - ₦999</TableCell>
                    <TableCell>5 points</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>₦1,000 and above</TableCell>
                    <TableCell>10 points</TableCell>
                  </TableRow>
                </tbody>
              </Table>
            </PrizeTable>
          </Section>
          
          <Section>
            <SectionTitle>Prize Disbursement</SectionTitle>
            <Paragraph>
              All prizes are disbursed within 48 hours of the draw. Winners are notified via SMS, and prizes are 
              credited directly to the winner's MTN account or through mobile money transfer.
            </Paragraph>
            <Paragraph>
              For large prizes (₦500,000 and above), winners may be required to provide additional identification 
              for verification purposes before the prize is disbursed.
            </Paragraph>
            <Paragraph>
              All prizes are subject to applicable taxes and regulatory requirements. MTN and Bridgetunes comply 
              with all relevant laws and regulations regarding prize disbursements.
            </Paragraph>
          </Section>
          
          <InfoBox>
            <strong>Don't miss out!</strong> Make sure you opt-in to be eligible for jackpot prizes. 
            Top up your MTN line regularly to increase your chances of winning in our daily and weekly draws.
          </InfoBox>
        </motion.div>
      </MainContent>
    </PageContainer>
  );
};

export default PrizesPage;
