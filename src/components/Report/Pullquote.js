import React from "react"
import { Box } from "rebass/styled-components"
import styled from "styled-components"
import { Lead, H2 } from "../../elements/Type"
import Streak from "../../assets/svg/streak.svg"

const ReportPullquote = ({ title, headline, ...props }) => {
  return (
    <Container {...props} width={1}>
      <Lead dangerouslySetInnerHTML={{ __html: title }} mb={30}></Lead>
      <H2
        dangerouslySetInnerHTML={{ __html: headline }}
        fontSize={[24, 48]}
        className={"quote"}
      ></H2>
      <Streak width={250}></Streak>
    </Container>
  )
}

const Container = styled(Box)`
  .quote {
    font-family: ${({ theme }) => theme.fonts.serif};
    font-weight: 400;
    line-height: 1;
    max-width: 1000px;
    font-size: 32px;

    @media screen and (max-width: ${({ theme }) => theme.breakpoints[0]}) {
      max-width: calc(100vw - 40px);
      overflow: hidden;
    }
  }

  .large-font {
    font-size: 44px;
  }

  .break {
    margin: 15px 0;
    display: block;
  }
`

export default ReportPullquote
