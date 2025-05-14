import styled from "styled-components";
import { Flex } from "./styles";
import { GoDash as DashIcon } from "react-icons/go";
import { FiPlus as PlusIcon } from "react-icons/fi";
import ReactMarkdown from "react-markdown";
import React from "react";

type FaqProps = {
  title: string;
  content: string;
};

type FaqBoxProps = {
  content: FaqProps;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
};

const FaqBoxWrapper = styled.div`
  background: #fff;
  padding: 20px;
  /* width: 400px; */ /* REMOVED fixed width */
  width: 100%; /* Ensure it takes full width of its container (the column item) */
  display: flex;
  flex-direction: row;
  gap: 20px;
  border-radius: 16px;
  justify-content: space-between;
  box-sizing: border-box;
  /* break-inside: avoid; /* Moved to the wrapper class in CSS */
  /* margin-bottom: 25px; */ /* Moved to the wrapper class in CSS */

  .content__wrapper {
    .title {
      color: #6b7280;
      font-size: 0.9rem;
      font-weight: 600;
    }

    .content,
    .content p,
    .content li {
      font-size: 0.85rem;
      font-weight: 400;
      color: #6f6c90;
    }

    ul li {
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

export const FaqBox = ({
  content,
  isOpen = false,
  onToggle,
  className,
}: FaqBoxProps) => {
  return (
    <FaqBoxWrapper
      style={{ alignItems: isOpen ? "flex-start" : "center" }}
      className={className}
    >
      <Flex
        direction="column"
        justify="flex-start"
        align="flex-start"
        gap="8px"
        className="content__wrapper"
      >
        <p className="title">{content.title}</p>
        {isOpen && (
          <ReactMarkdown
            components={{
              p: ({ children }) => <div className="content">{children}</div>,
              a: ({ href, children }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "#FFCC00",
                    color: "#fff",
                    fontWeight: "500",
                    padding: "8px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontSize: ".8rem",
                    marginTop: "10px",
                    display: "block",
                  }}
                >
                  {children}
                </a>
              ),
            }}
          >
            {content.content}
          </ReactMarkdown>
        )}
      </Flex>
      <div
        className="toggle"
        style={{ background: isOpen ? "#3b82f6" : "#F3F4F6" }}
        onClick={onToggle}
      >
        {isOpen ? <DashIcon size={20} color="#fff" /> : <PlusIcon size={20} />}
      </div>
    </FaqBoxWrapper>
  );
};
