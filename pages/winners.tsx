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

const WinnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const WinnerCard = styled(motion.div)`
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

const WinnerName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const WinnerPrize = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const WinnerDetails = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const WinnerQuote = styled.blockquote`
  font-style: italic;
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding-left: 1rem;
  margin-left: 0;
  color: ${({ theme }) => theme.colors.gray};
`;

const TabContainer = styled.div`
  margin-bottom: 2rem;
`;

const TabButtons = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 2rem;
  overflow-x: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: 0.5rem;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.gray};
  font-weight: ${({ active }) => active ? 600 : 400};
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => `${theme.colors.light}`};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

// Table for winners list
const WinnersTable = styled.div`
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

const WinnersPage: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState('recent');
  
  // Mock data for winners
  const recentWinners = [
    {
      id: 1,
      name: 'Adebayo O.',
      phone: '080********45',
      prize: '₦1,000,000',
      date: 'April 22, 2025',
      drawType: 'Weekday Jackpot',
      quote: 'I couldn\'t believe it when I got the message. This money will help me expand my business!'
    },
    {
      id: 2,
      name: 'Chioma E.',
      phone: '070********12',
      prize: '₦350,000',
      date: 'April 22, 2025',
      drawType: '2nd Prize',
      quote: 'I\'m so grateful to MTN for this opportunity. I\'ll use this money to pay for my children\'s education.'
    },
    {
      id: 3,
      name: 'Mohammed I.',
      phone: '081********78',
      prize: '₦150,000',
      date: 'April 22, 2025',
      drawType: '3rd Prize',
      quote: 'This is a blessing! I\'ve been an MTN customer for years, and now it has paid off.'
    },
    {
      id: 4,
      name: 'Blessing A.',
      phone: '090********23',
      prize: '₦75,000',
      date: 'April 22, 2025',
      drawType: 'Concession Prize',
      quote: 'I was so surprised when I got the call. Thank you MTN for this amazing gift!'
    },
    {
      id: 5,
      name: 'Emeka O.',
      phone: '080********67',
      prize: '₦3,000,000',
      date: 'April 20, 2025',
      drawType: 'Saturday Special Jackpot',
      quote: 'This is life-changing! I can now invest in my dream project. MTN has made my dreams come true!'
    },
    {
      id: 6,
      name: 'Fatima Y.',
      phone: '070********34',
      prize: '₦1,000,000',
      date: 'April 20, 2025',
      drawType: 'Saturday 2nd Prize',
      quote: 'I\'m overwhelmed with joy. This prize came at the perfect time for me and my family.'
    }
  ];
  
  const jackpotWinners = recentWinners.filter(winner => 
    winner.drawType.includes('Jackpot')
  );
  
  const allTimeWinners = [
    ...recentWinners,
    {
      id: 7,
      name: 'Oluwaseun D.',
      phone: '081********90',
      prize: '₦1,000,000',
      date: 'April 15, 2025',
      drawType: 'Weekday Jackpot',
      quote: 'I\'ve been topping up my MTN line regularly, and it finally paid off!'
    },
    {
      id: 8,
      name: 'Grace T.',
      phone: '090********56',
      prize: '₦350,000',
      date: 'April 15, 2025',
      drawType: '2nd Prize',
      quote: 'This prize will help me complete my house project. Thank you MTN!'
    },
    {
      id: 9,
      name: 'Ibrahim M.',
      phone: '080********78',
      prize: '₦3,000,000',
      date: 'April 13, 2025',
      drawType: 'Saturday Special Jackpot',
      quote: 'I\'m still in shock! This is the biggest blessing I\'ve received this year.'
    }
  ];
  
  const renderWinners = () => {
    let winnersToShow = [];
    
    switch(activeTab) {
      case 'recent':
        winnersToShow = recentWinners;
        break;
      case 'jackpot':
        winnersToShow = jackpotWinners;
        break;
      case 'allTime':
        winnersToShow = allTimeWinners;
        break;
      default:
        winnersToShow = recentWinners;
    }
    
    return (
      <WinnersGrid>
        {winnersToShow.map(winner => (
          <WinnerCard
            key={winner.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <WinnerPrize>{winner.prize}</WinnerPrize>
            <WinnerName>{winner.name}</WinnerName>
            <WinnerDetails>
              Phone: {winner.phone}<br />
              Date: {winner.date}<br />
              Draw: {winner.drawType}
            </WinnerDetails>
            <WinnerQuote>"{winner.quote}"</WinnerQuote>
          </WinnerCard>
        ))}
      </WinnersGrid>
    );
  };
  
  return (
    <PageContainer>
      <Head>
        <title>Winners | MTN MyNumba Don Win</title>
        <meta name="description" content="Meet the lucky winners of the MTN MyNumba Don Win promotion." />
      </Head>
      
      <Header />
      
      <MainContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageTitle>Winners</PageTitle>
          
          <Section>
            <Paragraph>
              Congratulations to all the winners of the MTN MyNumba Don Win promotion! 
              Every day, we select lucky MTN subscribers to receive amazing cash prizes. 
              Check out our recent winners and their stories below.
            </Paragraph>
            
            <InfoBox>
              <strong>Could you be next?</strong> Make sure you opt-in to be eligible for jackpot prizes. 
              Top up your MTN line regularly to increase your chances of winning in our daily and weekly draws.
            </InfoBox>
          </Section>
          
          <Section>
            <TabContainer>
              <TabButtons>
                <TabButton 
                  active={activeTab === 'recent'} 
                  onClick={() => setActiveTab('recent')}
                >
                  Recent Winners
                </TabButton>
                <TabButton 
                  active={activeTab === 'jackpot'} 
                  onClick={() => setActiveTab('jackpot')}
                >
                  Jackpot Winners
                </TabButton>
                <TabButton 
                  active={activeTab === 'allTime'} 
                  onClick={() => setActiveTab('allTime')}
                >
                  All-Time Winners
                </TabButton>
              </TabButtons>
              
              {renderWinners()}
            </TabContainer>
          </Section>
          
          <Section>
            <SectionTitle>Winners List</SectionTitle>
            <Paragraph>
              Below is a comprehensive list of all winners from our recent draws. 
              Winners are announced daily after each draw is completed.
            </Paragraph>
            
            <WinnersTable>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableHeader>Date</TableHeader>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Phone Number</TableHeader>
                    <TableHeader>Prize</TableHeader>
                    <TableHeader>Draw Type</TableHeader>
                  </TableRow>
                </TableHead>
                <tbody>
                  {allTimeWinners.map(winner => (
                    <TableRow key={winner.id}>
                      <TableCell>{winner.date}</TableCell>
                      <TableCell>{winner.name}</TableCell>
                      <TableCell>{winner.phone}</TableCell>
                      <TableCell>{winner.prize}</TableCell>
                      <TableCell>{winner.drawType}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </WinnersTable>
          </Section>
          
          <Section>
            <SectionTitle>How Winners Are Selected</SectionTitle>
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
          
          <InfoBox>
            <strong>Join our winners!</strong> Opt-in now and top up your MTN line to participate in our daily and weekly draws. 
            You could be our next big winner!
          </InfoBox>
        </motion.div>
      </MainContent>
    </PageContainer>
  );
};

export default WinnersPage;
