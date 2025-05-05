import React, { useRef, useState, useEffect } from "react";
import ReactConfetti from "react-confetti";
import styled from "styled-components";
import ConfettiBox from "./confetti-box";

type WinnerCardProps = {
  name: string;
  amount: string;
  date: string;
  phoneNumber: string;
  type: string;
};

const WinnerCardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
  padding: 28px 36px;
  background: #000000;
  border-radius: 20px;
  max-width: 400px;
  position: relative;

  .confetti__box__wrapper {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    height: 200px;
    top: 0;
  }

  .image {
    max-width: 155px;
  }

  .card__info {
    display: flex;
    flex-direction: column;
    gap: 6px;

    p {
      color: #fff;
      font-size: 0.85rem;
    }

    .amount {
      color: #ffcc08;
      font-size: 1.6rem;
      font-family: "Open Sans";
    }
  }

  @media (max-width: 600px) {
    padding: 20px;
    width: fit-content;

    .image {
      max-width: 120px;
    }

    .card__info {
      p {
        color: #fff;
        font-size: 0.75rem;
      }

      .amount {
        font-size: 1.3rem;
      }
    }
  }
`;

export const WinnerCard = ({ card }: { card: WinnerCardProps }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.clientWidth - 10);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <WinnerCardWrapper ref={cardRef}>
      <ConfettiBox
        gravity={0.1}
        height={200}
        initialVelocityX={2}
        initialVelocityY={2}
        numberOfPieces={80}
        opacity={1}
        recycle
        run
        width={cardWidth}
        wind={0}
      />
      <img
        className="image"
        src="/images/landing-page/winner-image.png"
        alt="winner"
      />
      <div className="card__info">
        <p>{card.phoneNumber}</p>
        <p>{card.name}</p>
        <p>{card.type}</p>
        <h3 className="amount">{card.amount}</h3>
        <p>{card.date}</p>
      </div>
    </WinnerCardWrapper>
  );
};
