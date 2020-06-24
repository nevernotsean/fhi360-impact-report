import React from "react"
import { Box } from "rebass/styled-components"
import styled from "styled-components"
import { Lead, H2 } from "../../elements/Type"
import Streak from "../../assets/svg/streak.svg"
import HandDrawnSVG from "./../HandDrawnSVG"

const ReportPullquote = ({ title, headline, ...props }) => {
  return (
    <Container {...props}>
      <Lead dangerouslySetInnerHTML={{ __html: title }} mb={2}></Lead>
      <H2
        dangerouslySetInnerHTML={{ __html: headline }}
        fontSize={[24, 48]}
      ></H2>
      <Box width={100} className="underline">
        <HandDrawnSVG svg={Streak}></HandDrawnSVG>
      </Box>
    </Container>
  )
}

const Container = styled(Box)`
  h2 {
    font-family: ${({ theme }) => theme.fonts.serif};
  }

  .underline {
  }
`

export default ReportPullquote
