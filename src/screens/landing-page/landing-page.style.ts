import styled from "styled-components";

interface LandingPageWrapperProps {
  backgroundPattern?: string;
}

export const LandingPageWrapper = styled.section<LandingPageWrapperProps>`
  position: relative;
  width: 100%;

  .global-title {
    text-align: center;
    font-size: 1.8rem;
    color: #6b7280;
    line-height: normal;
  }

  @media (max-width: 1024px) {
    .global-title {
      font-size: 1.6rem;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    .global-title {
      font-size: 1.4rem;
    }
  }
`;
