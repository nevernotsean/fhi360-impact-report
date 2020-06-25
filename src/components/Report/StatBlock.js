import React from "react"
import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"
import CountUp from "react-countup"

const StatBlock = ({
  children,
  start,
  end,
  duration,
  decimals,
  prefix,
  postfix,
  separator,
  ...props
}) => {
  return (
    <StatBlockContainer flexDirection={"column"} {...props}>
      <Box className={"number"}>
        {prefix && <span dangerouslySetInnerHTML={{ __html: prefix }}></span>}
        <CountUp
          end={end}
          duration={duration}
          decimals={decimals}
          separator={separator}
        ></CountUp>
        {postfix && <span dangerouslySetInnerHTML={{ __html: postfix }}></span>}
      </Box>
      <Box className={"body"}>{children}</Box>
      <div className="hr"></div>
      <div className="black-box"></div>
    </StatBlockContainer>
  )
}

const StatBlockContainer = styled(Flex)`
  .number {
    font-size: 68px;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 400;
    line-height: 1.5;
  }

  .body {
    max-width: 320px;
    margin-bottom: 10px;
  }

  .hr {
    margin-bottom: 0 !important;
  }

  .black-box {
    height: 25px;
    width: 50%;
    max-width: 300px;
    background: ${({ theme }) => theme.colors.black};
  }
`

export default StatBlock
