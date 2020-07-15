import React from "react"
import { Flex, Box } from "rebass/styled-components"
import styled from "styled-components"
import { useCountUp } from "react-countup"
import { useInView } from "react-intersection-observer"
import { Underlined } from "./../WordNote"

const StatBlock = ({
  children,
  start,
  end,
  duration,
  decimals,
  prefix,
  postfix,
  separator = ",",
  flip,
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
      <Flex
        flexDirection={"column"}
        // alignItems={"flex-start"}
        // alignItems={flip ? "flex-end" : "flex-start"}
      >
        <Box className={"number"}>
          {prefix && <span dangerouslySetInnerHTML={{ __html: prefix }}></span>}
          <span>{countUp}</span>
          {postfix && (
            <span dangerouslySetInnerHTML={{ __html: postfix }}></span>
          )}
        </Box>
        <Box className={"body"}>
          {children}
          {/* <div className="black-box"></div> */}
        </Box>
        <Underlined width={250}></Underlined>
      </Flex>
      {/* <div className="hr"></div> */}
    </StatBlockContainer>
  )
}

const StatBlockContainer = styled(Flex)`
  .number {
    font-size: 68px;
    font-family: ${({ theme }) => theme.fonts.sans};
    font-weight: 900;
    line-height: 1.5;
    min-width: 300px;
  }

  .body {
    max-width: 300px;
    font-weight: 700;
  }

  .hr {
    margin-bottom: 0 !important;
  }

  .black-box {
    height: 20px;
    width: 100%;
    background: ${({ theme }) => theme.colors.black};
    transform: translateY(20px);
  }

  ${({ flip }) =>
    flip &&
    `

  `}
`

export default StatBlock
