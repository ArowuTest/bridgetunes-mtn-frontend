import React from 'react';
import { Table, Badge } from '../common/styles';
import styled from 'styled-components';

interface RecentWinner {
  id: string;
  msisdn: string;
  amount: number;
  drawDate: string;
  drawType: 'daily' | 'weekly';
  status: 'pending' | 'notified' | 'claimed';
}

interface RecentWinnersProps {
  winners: RecentWinner[];
}

const TableContainer = styled.div`
  overflow-x: auto;
`;

const PhoneNumber = styled.span`
  font-family: monospace;
`;

const Amount = styled.span`
  font-weight: 600;
`;

const RecentWinners: React.FC<RecentWinnersProps> = ({ winners }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <Badge variant="warning">Pending</Badge>;
      case 'notified':
        return <Badge variant="primary">Notified</Badge>; // Changed from "info" to "primary"
      case 'claimed':
        return <Badge variant="success">Claimed</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>; // Added explicit variant
    }
  };

  const formatMSISDN = (msisdn: string) => {
    // Format as +234 XXX XXX XXXX
    if (msisdn.startsWith('+')) {
      const digits = msisdn.substring(1);
      return `+${digits.substring(0, 3)} ${digits.substring(3, 6)} ${digits.substring(6, 9)} ${digits.substring(9)}`;
    }
    return msisdn;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Phone Number</th>
            <th>Prize Amount</th>
            <th>Draw Date</th>
            <th>Draw Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {winners.length > 0 ? (
            winners.map((winner) => (
              <tr key={winner.id}>
                <td><PhoneNumber>{formatMSISDN(winner.msisdn)}</PhoneNumber></td>
                <td><Amount>{formatAmount(winner.amount)}</Amount></td>
                <td>{formatDate(winner.drawDate)}</td>
                <td>
                  <Badge variant={winner.drawType === 'weekly' ? 'secondary' : 'primary'}>
                    {winner.drawType === 'weekly' ? 'Weekly' : 'Daily'}
                  </Badge>
                </td>
                <td>{getStatusBadge(winner.status)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: 'center' }}>No recent winners found</td>
            </tr>
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RecentWinners;
