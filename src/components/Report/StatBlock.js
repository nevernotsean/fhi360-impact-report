import React from "react"
import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"
import { useCountUp } from "react-countup"
import { useInView } from "react-intersection-observer"
const StatBlock = ({
  children,
  start,
  end,
  duration,
  decimals,
  prefix,
  postfix,
  separator = ",",
  ...props
}) => {
  const [parentRef, inView] = useInView({
    rootMargin: "20% 0px -20% 0px",
    threshold: 1,
    triggerOnce: true,
  })

  const { countUp, start: startCount, reset } = useCountUp({
    end,
    duration,
    decimals,
    separator,
    startOnMount: false,
  })

  React.useEffect(() => {
    if (inView) startCount()
  }, [inView])

  return (
    <StatBlockContainer flexDirection={"column"} {...props}>
      <div ref={parentRef}></div>
      <Box className={"number"}>
        {prefix && <span dangerouslySetInnerHTML={{ __html: prefix }}></span>}
        <span>{countUp}</span>
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
