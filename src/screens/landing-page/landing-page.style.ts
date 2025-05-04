import styled from "styled-components";

interface LandingPageWrapperProps {
  backgroundPattern?: string;
}

export const LandingPageWrapper = styled.section<LandingPageWrapperProps>`
  position: relative;
  width: 100%;

  .title {
    text-align: center;
    font-size: 1.8rem;
    color: #6b7280;
    line-height: normal;
  }
`;

