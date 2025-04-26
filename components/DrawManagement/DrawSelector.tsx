import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';
import { Draw } from '../../types';


interface DrawOptionProps {
  selected: boolean;
}

interface DrawSelectorProps {
  draws: Draw[];
  selectedDraw: Draw | null;
  onSelectDraw: (draw: Draw) => void;
}

const DrawSelectorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius?.medium || '0.375rem'};
  box-shadow: ${({ theme }) => theme.shadows?.medium || '0 4px 6px rgba(0, 0, 0, 0.1)'};
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const DrawOption = styled.div<DrawOptionProps>`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme, selected }) => selected ? theme.colors.primary : `${theme.colors.primary}10`};
  color: ${({ theme, selected }) => selected ? theme.colors.dark : theme.colors.text};
  border-radius: ${({ theme }) => theme.borderRadius?.small || '0.25rem'};
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions?.normal || 'all 0.3s ease-in-out'};
  
  &:hover {
    background-color: ${({ theme, selected }) => selected ? theme.colors.primary : `${theme.colors.primary}20`};
  }
`;

const DrawIcon = styled.div`
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DrawInfo = styled.div`
  flex: 1;
`;

const DrawName = styled.div`
  font-weight: 600;
`;

const DrawDate = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight || theme.colors.gray};
`;

const DrawSelector: React.FC<DrawSelectorProps> = ({ draws, selectedDraw, onSelectDraw }) => {
  return (
    <DrawSelectorContainer>
      <h3 style={{ marginBottom: '1rem' }}>Select Draw</h3>
      {draws.map((draw) => (
        <DrawOption 
          key={draw.id} 
          selected={draw.id === selectedDraw?.id}
          onClick={() => onSelectDraw(draw)}
        >
          <DrawIcon>
            <FaCalendarAlt />
          </DrawIcon>
          <DrawInfo>
            <DrawName>{draw.name}</DrawName>
            <DrawDate>{new Date(draw.date).toLocaleDateString()}</DrawDate>
          </DrawInfo>
        </DrawOption>
      ))}
    </DrawSelectorContainer>
  );
};

export default DrawSelector;
