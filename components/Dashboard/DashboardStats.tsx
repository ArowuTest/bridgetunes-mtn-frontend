import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUsers, FaMoneyBillWave, FaTrophy, FaBell } from 'react-icons/fa';
import { Card, CardTitle, Grid, Col } from '../common/styles';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: 'users' | 'topups' | 'draws' | 'notifications';
  color: string;
}

const StatCardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const IconContainer = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({ color }) => `${color}20`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  svg {
    color: ${({ color }) => color};
    font-size: 1.75rem;
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 0.5rem;
`;

const StatValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  margin: 0;
`;

const BackgroundIcon = styled.div<{ color: string }>`
  position: absolute;
  right: -15px;
  bottom: -15px;
  font-size: 6rem;
  opacity: 0.1;
  color: ${({ color }) => color};
`;

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'users':
        return <FaUsers />;
      case 'topups':
        return <FaMoneyBillWave />;
      case 'draws':
        return <FaTrophy />;
      case 'notifications':
        return <FaBell />;
      default:
        return <FaUsers />;
    }
  };

  return (
    <StatCardContainer
      whileHover={{ y: -5, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <IconContainer color={color}>
        {renderIcon()}
      </IconContainer>
      <StatContent>
        <StatTitle>{title}</StatTitle>
        <StatValue>{value}</StatValue>
      </StatContent>
      <BackgroundIcon color={color}>
        {renderIcon()}
      </BackgroundIcon>
    </StatCardContainer>
  );
};

interface DashboardStatsProps {
  userCount: number;
  topupCount: number;
  drawCount: number;
  notificationCount: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
  userCount,
  topupCount,
  drawCount,
  notificationCount
}) => {
  return (
    <Grid>
      <Col span={3}>
        <StatCard
          title="Total Users"
          value={userCount}
          icon="users"
          color="#0066CC" // Bridgetunes Blue
        />
      </Col>
      <Col span={3}>
        <StatCard
          title="Total Topups"
          value={topupCount}
          icon="topups"
          color="#FFCC00" // MTN Yellow
        />
      </Col>
      <Col span={3}>
        <StatCard
          title="Total Draws"
          value={drawCount}
          icon="draws"
          color="#28a745" // Success Green
        />
      </Col>
      <Col span={3}>
        <StatCard
          title="Notifications"
          value={notificationCount}
          icon="notifications"
          color="#17a2b8" // Info Blue
        />
      </Col>
    </Grid>
  );
};

export default DashboardStats;
