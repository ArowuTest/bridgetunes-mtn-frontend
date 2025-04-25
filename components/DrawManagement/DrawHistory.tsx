import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTrophy, FaCheck, FaTimes } from 'react-icons/fa';
import { Card, CardTitle, Button, Table, Badge, Spinner, Alert } from '../common/styles';
import { drawAPI } from '../../services/api';

interface Draw {
  id: string;
  day: string;
  type: 'daily' | 'weekly';
  eligibleDigits: number[];
  amount: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduledDate: string;
  executedDate?: string;
}

// Helper function to ensure draws conform to the Draw interface
const ensureDrawsTypeCompatibility = (draws: any[]): Draw[] => {
  return draws.map(draw => {
    // Ensure status is one of the allowed values
    let safeStatus: "scheduled" | "completed" | "cancelled" = "scheduled";
    if (draw.status === "completed" || draw.status === "cancelled") {
      safeStatus = draw.status;
    }
    
    return {
      ...draw,
      status: safeStatus
    } as Draw;
  });
};

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 1rem;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

const FilterSelect = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  min-width: 150px;
`;

const DigitBadge = styled(Badge)`
  margin-right: 0.25rem;
  margin-bottom: 0.25rem;
`;

const DigitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 200px;
`;

const NoDrawsMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${({ theme }) => theme.colors.gray};
`;

const DrawHistory: React.FC = () => {
  const [draws, setDraws] = useState<Draw[]>([]);
  const [filteredDraws, setFilteredDraws] = useState<Draw[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [processingDrawId, setProcessingDrawId] = useState<string | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'danger'; text: string } | null>(null);

  useEffect(() => {
    fetchDraws();
  }, []);

  useEffect(() => {
    filterDraws();
  }, [draws, statusFilter, typeFilter]);

  const fetchDraws = async () => {
    setLoading(true);
    setError(null);
    try {
      // Get draws for the last 30 days
      const endDate = new Date().toISOString();
      const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
      
      const response = await drawAPI.getDraws(startDate, endDate);
      setDraws(ensureDrawsTypeCompatibility(response.draws || []));
    } catch (error) {
      console.error('Error fetching draws:', error);
      setError('Failed to fetch draws. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const filterDraws = () => {
    let filtered = [...draws];
    
    if (statusFilter !== 'all') {
      filtered = filtered.filter(draw => draw.status === statusFilter);
    }
    
    if (typeFilter !== 'all') {
      filtered = filtered.filter(draw => draw.type === typeFilter);
    }
    
    setFilteredDraws(filtered);
  };

  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeFilter(e.target.value);
  };

  const executeDraw = async (id: string) => {
    setProcessingDrawId(id);
    setMessage(null);
    
    try {
      await drawAPI.executeDraw(id);
      
      // Update the draw in the list
      const updatedDraws = draws.map(draw => 
        draw.id === id 
          ? { ...draw, status: 'completed', executedDate: new Date().toISOString() } 
          : draw
      );

      // Use the helper function to ensure type compatibility
      setDraws(ensureDrawsTypeCompatibility(updatedDraws));
      setMessage({ type: 'success', text: 'Draw executed successfully!' });
    } catch (error) {
      console.error('Error executing draw:', error);
      setMessage({ type: 'danger', text: 'Failed to execute draw. Please try again.' });
    } finally {
      setProcessingDrawId(null);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'scheduled':
        return <Badge variant="warning">Scheduled</Badge>;
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'cancelled':
        return <Badge variant="danger">Cancelled</Badge>;
      default:
        return <Badge variant="primary">Unknown</Badge>; // Changed from default Badge to variant="primary"
    }
  };

  return (
    <Card>
      <CardTitle>Draw History</CardTitle>
      
      {message && (
        <Alert variant={message.type} style={{ marginBottom: '1rem' }}>
          {message.text}
        </Alert>
      )}
      
      <FilterContainer>
        <div>
          <label htmlFor="statusFilter">Status:</label>
          <FilterSelect id="statusFilter" value={statusFilter} onChange={handleStatusFilterChange}>
            <option value="all">All Statuses</option>
            <option value="scheduled">Scheduled</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </FilterSelect>
        </div>
        
        <div>
          <label htmlFor="typeFilter">Type:</label>
          <FilterSelect id="typeFilter" value={typeFilter} onChange={handleTypeFilterChange}>
            <option value="all">All Types</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </FilterSelect>
        </div>
        
        <Button variant="secondary" onClick={fetchDraws}>
          <FaCalendarAlt style={{ marginRight: '0.5rem' }} />
          Refresh
        </Button>
      </FilterContainer>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <Spinner />
          <p>Loading draws...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : filteredDraws.length === 0 ? (
        <NoDrawsMessage>
          <FaTrophy size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
          <p>No draws found matching the selected filters.</p>
        </NoDrawsMessage>
      ) : (
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Day</th>
                <th>Type</th>
                <th>Eligible Digits</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDraws.map((draw) => (
                <tr key={draw.id}>
                  <td>{formatDate(draw.scheduledDate)}</td>
                  <td style={{ textTransform: 'capitalize' }}>{draw.day}</td>
                  <td>
                    <Badge variant={draw.type === 'weekly' ? 'secondary' : 'primary'}>
                      {draw.type === 'weekly' ? 'Weekly' : 'Daily'}
                    </Badge>
                  </td>
                  <td>
                    <DigitsContainer>
                      {draw.eligibleDigits.map((digit) => (
                        <DigitBadge key={digit} variant="primary">
                          {digit}
                        </DigitBadge>
                      ))}
                    </DigitsContainer>
                  </td>
                  <td>{formatAmount(draw.amount)}</td>
                  <td>{getStatusBadge(draw.status)}</td>
                  <td>
                    {draw.status === 'scheduled' ? (
                      <Button
                        variant="success"
                        onClick={() => executeDraw(draw.id)}
                        disabled={processingDrawId === draw.id}
                        style={{ padding: '0.5rem', fontSize: '0.875rem' }}
                      >
                        {processingDrawId === draw.id ? (
                          <Spinner />
                        ) : (
                          <>
                            <FaCheck style={{ marginRight: '0.25rem' }} />
                            Execute
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        disabled
                        style={{ padding: '0.5rem', fontSize: '0.875rem', opacity: 0.5 }}
                      >
                        {draw.status === 'completed' ? 'Completed' : 'Cancelled'}
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </Card>
  );
};

export default DrawHistory;

