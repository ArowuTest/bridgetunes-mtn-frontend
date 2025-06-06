import { useRouter } from "next/router"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 3.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
  }
`

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background-color: #e0e0e0;
  margin: 0 1rem;
  display: inline-block;
`

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 50%;
  }
`;

export const ProductLogo = () => {
  const { push } = useRouter()

  return (
    <Wrapper onClick={() => push("/")}>
      <ResponsiveImage src="/images/bridgetune-logo.png" alt="bridgetune" />

      <Divider />

      <ResponsiveImage src="images/mtn-logo.png" alt="mtn" />
    </Wrapper>
  )
}
