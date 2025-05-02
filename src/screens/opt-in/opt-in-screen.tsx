import OptInForm from "@/src/components/OptIn/OptInForm"
import React from "react"
import styled from "styled-components"

const OptInContainer = styled.div`
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`

export const OptInScreen: React.FC = () => {
  return (
    <div>
      <OptInContainer>
        <OptInForm />
      </OptInContainer>
    </div>
  )
}
