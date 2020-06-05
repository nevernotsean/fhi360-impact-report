import React from "react"
import styled from "styled-components"
import { Flex, Box } from "reflexbox"
import HandDrawnSVG from "./HandDrawnSVG"

const SectionDividerDark = ({
  svg,
  duration = 1,
  duration2 = 0.5,
  alt,
  overrideLength1,
  ...props
}) => {
  return (
    <Container>
      <Box width={1} maxWidth={1000} mx={"auto"} py={"10vw"} {...props}>
        <HandDrawnSVG
          svg={svg}
          duration={duration}
          duration2={duration2}
          delay={0.5}
          alt={alt}
          overrideLength1={overrideLength1}
        ></HandDrawnSVG>
      </Box>
    </Container>
  )
}

const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.black};

  svg .animate,
  svg .animate2,
  svg .animate3,
  svg .animate4 {
    stroke: rgba(255, 255, 255, 0.9) !important;
  }
`

export default SectionDividerDark
