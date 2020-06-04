import React from "react"
import styled from "styled-components"
import { Flex, Box } from "reflexbox"
import HandDrawnSVG from "./HandDrawnSVG"

const SectionDividerDark = ({ svg, ...props }) => {
  return (
    <Container>
      <Box width={1} maxWidth={1000} mx={"auto"} py={"10vw"} {...props}>
        <HandDrawnSVG
          svg={svg}
          duration={1}
          delay={0.5}
          alt={"Let's change perception"}
        ></HandDrawnSVG>
      </Box>
    </Container>
  )
}

const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.black};

  svg .animate,
  svg .animate2 {
    stroke: rgba(255, 255, 255, 0.9) !important;
  }
`

export default SectionDividerDark
