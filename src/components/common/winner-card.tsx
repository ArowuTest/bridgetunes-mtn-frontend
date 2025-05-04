import styled from "styled-components";

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
`;

export const WinnerCard = ({ card }: { card: WinnerCardProps }) => {
  return (
    <WinnerCardWrapper>
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
