import React from "react"
import { Flex } from "rebass"
import FlexSectionContainer from "../FlexSectionContainer"
import { H1, H2, Lead } from "../../elements/Type"
import styled from "styled-components"

const Masthead = () => {
  return (
    <MastheadContainer>
      <FlexSectionContainer minHeight={"80vh"}>
        <Lead mb={3}>Measuring Progress</Lead>
        <div className="hr"></div>
        <H1>
          2019
          <br />
          Impact Report
        </H1>
      </FlexSectionContainer>
    </MastheadContainer>
  )
}

const MastheadContainer = styled.div`
  .hr {
    width: 100%;
    max-width: 600px;
    transform: translateX(-300px);
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    margin-bottom: 50px;
  }
`

export default Masthead
