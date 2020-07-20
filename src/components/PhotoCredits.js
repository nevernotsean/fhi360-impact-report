import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"

const PhotoCredits = ({ credits, ...props }) => {
  return (
    <PhotoCreditsContainer isOpen={true} {...props}>
      <span className={"credit"}>Photo Credit: {credits}</span>
    </PhotoCreditsContainer>
  )
}

const PhotoCreditsContainer = styled(Box)`
  display: flex;
  padding: 1rem;

  span,
  p {
    font-size: 12px;
    line-height: 1;
    margin-bottom: 0;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    .button,
    .credit {
      opacity: 0.6 !important;
    }
  }
`

export default PhotoCredits
