import React from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"

const PhotoCredits = ({ credits, ...props }) => {
  const [isOpen, setIsOpen] = React.useState()

  return (
    <PhotoCreditsContainer isOpen={isOpen} {...props}>
      <span className={"button"} onClick={() => setIsOpen(!isOpen)}>
        Photo Credit
      </span>
      <span className={"credit"}>{credits}</span>
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
  .button {
    cursor: pointer;
    margin: 0 5px 0px 0;
  }
  .credit {
    opacity: 0;
    transition: opacity 300ms linear;
    ${({ isOpen }) => isOpen && `opacity: 1;`}
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    flex-wrap: wrap;

    .button {
      margin: 0 5px 5px 0;
    }

    .button,
    .credit {
      opacity: 0.6 !important;
    }
  }
`

export default PhotoCredits
