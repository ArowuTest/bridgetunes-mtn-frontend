import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CounterWrapper = styled.div`
  display: flex;
  gap: 16px;
  width: fit-content;

  @media (min-width: 600px) {
    gap: 32px;
  }
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 50px;

  @media (min-width: 600px) {
    min-width: 70px;
  }
`;

const TimeBox = styled.div`
  min-width: 60px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;
  border-radius: 5px;
  background: linear-gradient(180deg, #ffcc08 0%, #ff8e00 100%);
  box-sizing: border-box;

  @media (min-width: 600px) {
    min-width: 90px;
    min-height: 90px;
    padding: 2px;
  }
`;

const TimeInner = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  font-family: "Monospace Bold";
  color: #fff;
  background: #101935;
  border-radius: 5px;
  box-sizing: border-box;
  line-height: normal;

  @media (min-width: 600px) {
    font-size: 2.2rem;
  }
`;

const Label = styled.div`
  margin-top: 4px;
  font-size: 0.5rem;
  color: #6b7280;
  font-family: Montserrat;
  font-weight: 400;
  letter-spacing: 1px;

  @media (min-width: 600px) {
    margin-top: 8px;
    font-size: 0.6rem;
  }
`;

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
