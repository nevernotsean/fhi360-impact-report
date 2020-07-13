import React from "react"
import { Flex } from "rebass"
import FlexSectionContainer from "../FlexSectionContainer"
import { H1, H2, Lead } from "../../elements/Type"
import styled from "styled-components"
import { Box } from "rebass/styled-components"

const Masthead = ({
  title = "Measuring Progress",
  headline = "2019<br />Impact Report",
  children,
  ...props
}) => {
  return (
    <MastheadContainer>
      <FlexSectionContainer minHeight={"50vh"} {...props}>
        {/* <Lead mb={3}>{title}</Lead> */}
        <div className="hr"></div>
        <H1 dangerouslySetInnerHTML={{ __html: headline }}></H1>
        {children && <Box my={30}>{children}</Box>}
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

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      max-width: 60vw;
      transform: translateX(-20px);
    }
  }
`

export default Masthead
