import styled from "styled-components";
import { Flex } from "./styles";
import { GoDash as DashIcon } from "react-icons/go";
import { useState } from "react";

type FaqProps = {
  title: string;
  content: string;
};

const FaqBoxWrapper = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px;
  max-width: 420px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-radius: 16px;

  .content__wrapper {
    .title {
      color: #6b7280;
      font-size: 1rem;
      font-weight: 600;
    }

    .content {
      font-size: 0.85rem;
      font-weight: 400;
      color: #6f6c90;
    }
  }

  .toggle {
    padding: 4px;
    height: fit-content;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export const FaqBox = ({ content }: { content: FaqProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FaqBoxWrapper style={{ alignItems: isOpen ? "flex-start" : "center" }}>
      <Flex
        direction="column"
        justify="flex-start"
        align={"flex-start"}
        gap="8px"
        className="content__wrapper"
      >
        <p className="title">{content.title}</p>
        {isOpen && <p className="content">{content.content}</p>}
      </Flex>
      <div className="toggle" style={{ background: isOpen ? "#3b82f6" : "" }} onClick={()=> setIsOpen(!isOpen)}>
        <DashIcon size={20} />
      </div>
    </FaqBoxWrapper>
  );
};
