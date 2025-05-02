import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import { Card, CardTitle } from '../common/styles';
import styled from 'styled-components';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ActivityChartProps {
  topupData: number[];
  userOptInData: number[];
  labels: string[];
}

const ChartContainer = styled.div`
  height: 300px;
  margin-top: 1rem;
`;

const ActivityChart: React.FC<ActivityChartProps> = ({ topupData, userOptInData, labels }) => {
  const data = {
    labels,
    datasets: [
      {
        label: 'Topups',
        data: topupData,
        borderColor: '#FFCC00', // MTN Yellow
        backgroundColor: 'rgba(255, 204, 0, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'User Opt-ins',
        data: userOptInData,
        borderColor: '#0066CC', // Bridgetunes Blue
        backgroundColor: 'rgba(0, 102, 204, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
  };

  return (
    <Card>
      <CardTitle>Activity Overview</CardTitle>
      <ChartContainer>
        <Line data={data} options={options} />
      </ChartContainer>
    </Card>
  );
};

export default ActivityChart;
