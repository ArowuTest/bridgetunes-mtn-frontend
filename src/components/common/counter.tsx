import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled Components
const CounterWrapper = styled.div`
  display: flex;
  gap: 32px;
  width: fit-content;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 70px;
`;

const TimeBox = styled.div`
  min-width: 90px;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 5px;
  background: linear-gradient(180deg, #ffcc08 0%, #ff8e00 100%);
  box-sizing: border-box;

`;

const TimeInner = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Montserrat";
  color: #fff;
  background: #101935;
  border-radius: 5px; 
  box-sizing: border-box;
  line-height: normal;
`;

const Label = styled.div`
  margin-top: 8px;
  font-size: 0.6rem;
  color: #6b7280;
  font-family: Montserrat;
  font-weight: 400;
  letter-spacing: 1px;
`;

// Countdown calculation
function getTimeRemaining(targetDate: string) {
  const total = Date.parse(targetDate) - Date.now();
  const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
  const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
  const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
  const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
  return { total, days, hours, minutes, seconds };
}

// Main Counter Component
export const Counter = ({ targetDate }: { targetDate: string }) => {
  const [time, setTime] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: time.days },
    { label: "HOURS", value: time.hours },
    { label: "MINUTES", value: time.minutes },
    { label: "SECONDS", value: time.seconds },
  ];

  return (
    <CounterWrapper>
      {timeUnits.map((unit) => (
        <BoxWrap key={unit.label}>
          <TimeBox>
            <TimeInner>{String(unit.value).padStart(2, "0")}</TimeInner>
          </TimeBox>
          <Label>{unit.label}</Label>
        </BoxWrap>
      ))}
    </CounterWrapper>
  );
};
