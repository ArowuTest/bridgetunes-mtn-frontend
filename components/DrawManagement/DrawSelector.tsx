import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFilter, FaCalendarAlt, FaRandom, FaPlay } from 'react-icons/fa';
import { Card, CardTitle, Button, Grid, Col, Flex, Spinner, Alert } from '../common/styles';
import { useDraw } from '../../contexts/DrawContext';
import { drawAPI } from '../../services/api';

const DigitSelector = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const DigitButton = styled.button<{ selected: boolean }>`
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.light};
  color: ${({ theme, selected }) => selected ? theme.colors.dark : theme.colors.gray};
  border: 2px solid ${({ theme, selected }) => selected ? theme.colors.primary : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.75rem;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : `${theme.colors.primary}20`};
  }
`;

const DaySelector = styled.div`
  display: flex;
  overflow-x: auto;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.light};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;

const DayButton = styled.button<{ selected: boolean }>`
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.white};
  color: ${({ theme, selected }) => selected ? theme.colors.dark : theme.colors.gray};
  border: 1px solid ${({ theme, selected }) => selected ? theme.colors.primary : theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  white-space: nowrap;
  margin-right: 0.5rem;
  
  &:hover {
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : `${theme.colors.primary}10`};
  }
`;

const DrawTypeSelector = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const DrawTypeButton = styled.button<{ selected: boolean }>`
  background-color: ${({ theme, selected }) => selected ? theme.colors.secondary : theme.colors.white};
  color: ${({ theme, selected }) => selected ? theme.colors.white : theme.colors.gray};
  border: 1px solid ${({ theme, selected }) => selected ? theme.colors.secondary : theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  flex: 1;
  
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  
  &:hover {
    background-color: ${({ theme, selected }) => selected ? theme.colors.secondary : `${theme.colors.secondary}10`};
  }
`;

const DrawAmountInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DrawSelector: React.FC = () => {
  const { 
    eligibleDigits, 
    setEligibleDigits, 
    selectedDay, 
    setSelectedDay,
    drawType,
    setDrawType,
    drawAmount,
    setDrawAmount,
    isProcessing,
    setIsProcessing
  } = useDraw();
  
  const [message, setMessage] = useState<{ type: 'success' | 'danger' | 'warning'; text: string } | null>(null);
  const [allDigits] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [days] = useState<string[]>(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']);
  
  useEffect(() => {
    // Get default eligible digits for the selected day
    const fetchDefaultDigits = async () => {
      try {
        const response = await drawAPI.getDefaultEligibleDigits(selectedDay.toLowerCase());
        setEligibleDigits(response.digits);
      } catch (error) {
        console.error('Error fetching default digits:', error);
        // Set default digits based on day
        switch (selectedDay) {
          case 'Monday':
            setEligibleDigits([0, 1]);
            break;
          case 'Tuesday':
            setEligibleDigits([2, 3]);
            break;
          case 'Wednesday':
            setEligibleDigits([4, 5]);
            break;
          case 'Thursday':
            setEligibleDigits([6, 7]);
            break;
          case 'Friday':
            setEligibleDigits([8, 9]);
            break;
          case 'Saturday':
            setEligibleDigits([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
            break;
          default:
            setEligibleDigits([]);
        }
      }
    };
    
    fetchDefaultDigits();
  }, [selectedDay, setEligibleDigits]);
  
  const toggleDigit = (digit: number) => {
    if (eligibleDigits.includes(digit)) {
      setEligibleDigits(eligibleDigits.filter(d => d !== digit));
    } else {
      setEligibleDigits([...eligibleDigits, digit]);
    }
  };
  
  const selectAllDigits = () => {
    setEligibleDigits([...allDigits]);
  };
  
  const clearAllDigits = () => {
    setEligibleDigits([]);
  };
  
  const handleDayChange = (day: string) => {
    setSelectedDay(day);
  };
  
  const handleDrawTypeChange = (type: 'daily' | 'weekly') => {
    setDrawType(type);
  };
  
  const handleDrawAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setDrawAmount(isNaN(value) ? 0 : value);
  };
  
  const handleScheduleDraw = async () => {
    if (eligibleDigits.length === 0) {
      setMessage({ type: 'warning', text: 'Please select at least one eligible digit.' });
      return;
    }
    
    if (drawAmount <= 0) {
      setMessage({ type: 'warning', text: 'Please enter a valid draw amount.' });
      return;
    }
    
    setIsProcessing(true);
    setMessage(null);
    
    try {
      const draw = {
        day: selectedDay.toLowerCase(),
        type: drawType,
        eligibleDigits,
        amount: drawAmount,
        scheduledDate: new Date().toISOString()
      };
      
      await drawAPI.scheduleDraw(draw);
      setMessage({ type: 'success', text: 'Draw scheduled successfully!' });
    } catch (error) {
      console.error('Error scheduling draw:', error);
      setMessage({ type: 'danger', text: 'Failed to schedule draw. Please try again.' });
    } finally {
      setIsProcessing(false);
    }
  };
  
  return (
    <Card>
      <CardTitle>Configure Draw</CardTitle>
      
      {message && (
        <Alert variant={message.type} style={{ marginBottom: '1rem' }}>
          {message.text}
        </Alert>
      )}
      
      <DrawTypeSelector>
        <DrawTypeButton 
          selected={drawType === 'daily'} 
          onClick={() => handleDrawTypeChange('daily')}
        >
          Daily Draw
        </DrawTypeButton>
        <DrawTypeButton 
          selected={drawType === 'weekly'} 
          onClick={() => handleDrawTypeChange('weekly')}
        >
          Weekly Draw
        </DrawTypeButton>
      </DrawTypeSelector>
      
      <DaySelector>
        {days.map(day => (
          <DayButton
            key={day}
            selected={selectedDay === day}
            onClick={() => handleDayChange(day)}
          >
            {day}
          </DayButton>
        ))}
      </DaySelector>
      
      <Flex justify="space-between" align="center" style={{ marginBottom: '1rem' }}>
        <h4>Select Eligible Digits</h4>
        <Flex gap="0.5rem">
          <Button 
            variant="secondary" 
            onClick={selectAllDigits}
            style={{ padding: '0.5rem', fontSize: '0.875rem' }}
          >
            Select All
          </Button>
          <Button 
            variant="danger" 
            onClick={clearAllDigits}
            style={{ padding: '0.5rem', fontSize: '0.875rem' }}
          >
            Clear All
          </Button>
        </Flex>
      </Flex>
      
      <DigitSelector>
        {allDigits.map(digit => (
          <DigitButton
            key={digit}
            selected={eligibleDigits.includes(digit)}
            onClick={() => toggleDigit(digit)}
          >
            {digit}
          </DigitButton>
        ))}
      </DigitSelector>
      
      <h4 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>Draw Amount (₦)</h4>
      <DrawAmountInput
        type="number"
        value={drawAmount || ''}
        onChange={handleDrawAmountChange}
        placeholder="Enter draw amount"
        min="0"
      />
      
      <Button
        variant="primary"
        onClick={handleScheduleDraw}
        disabled={isProcessing}
        style={{ width: '100%' }}
      >
        {isProcessing ? <Spinner /> : (
          <>
            <FaPlay style={{ marginRight: '0.5rem' }} />
            Schedule Draw
          </>
        )}
      </Button>
    </Card>
  );
};

export default DrawSelector;
