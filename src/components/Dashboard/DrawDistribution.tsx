import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Card, CardTitle } from '../common/styles';
import styled from 'styled-components';

// Register ChartJS components
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

interface DrawDistributionProps {
  dailyDraws: number;
  weeklyDraws: number;
}

const ChartContainer = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const DrawDistribution: React.FC<DrawDistributionProps> = ({ dailyDraws, weeklyDraws }) => {
  const data = {
    labels: ['Daily Draws', 'Weekly Draws'],
    datasets: [
      {
        data: [dailyDraws, weeklyDraws],
        backgroundColor: [
          '#FFCC00', // MTN Yellow
          '#0066CC', // Bridgetunes Blue
        ],
        borderColor: [
          '#FFCC00',
          '#0066CC',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw || 0;
            const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
            const percentage = Math.round((value as number / total) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '70%',
  };

  return (
    <Card>
      <CardTitle>Draw Distribution</CardTitle>
      <ChartContainer>
        <Doughnut data={data} options={options} />
      </ChartContainer>
    </Card>
  );
};

export default DrawDistribution;
