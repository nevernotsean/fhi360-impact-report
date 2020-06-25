import React from "react"
import styled from "styled-components"
import { Flex, Box } from "rebass/styled-components"
import HandDrawnSVG from "./HandDrawnSVG"
import { H2 } from "../elements/Type"

const SectionDividerDark = ({
  svg,
  duration = 1,
  duration2 = 0.5,
  alt,
  overrideLength,
  children,
  ...props
}) => {
  return (
    <Container>
      <Box
        width={1}
        maxWidth={1000}
        mx={"auto"}
        py={"10vw"}
        sx={{
          position: "relative",
        }}
        {...props}
      >
        <H2 fontSize={[28, 88]}>{children}</H2>
        <HandDrawnSVG
          svg={svg}
          duration={duration}
          duration2={duration2}
          delay={0.5}
          alt={alt}
          overrideLength={overrideLength}
        ></HandDrawnSVG>
      </Box>
    </Container>
  )
}

const Container = styled(Flex)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  svg .animate,
  svg .animate2,
  svg .animate3,
  svg .animate4 {
    stroke: rgba(255, 255, 255, 0.9) !important;
  }

  h2 {
    text-align: center;
    position: absolute;
    width: 100%;
    max-width: 800px;
    transform: translateX(-50%);
    left: 50%;
    top: 5vw;
    line-height: 1;
  }
`

export default SectionDividerDark
