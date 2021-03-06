import React from "react"
import { Flex } from "rebass/styled-components"
import styled from "styled-components"

const FlexSectionContainer = ({
  py = 100,
  px = [20, 50],
  minHeight = ["100vw", "100vh"],
  children,
  centered,
  ...props
}) => (
  <StyledSectionContainer
    py={py}
    px={px}
    width={1}
    maxWidth={1200}
    mx={"auto"}
    minHeight={minHeight}
    flexDirection={"column"}
    justifyContent={centered && "center"}
    {...props}
  >
    {children}
  </StyledSectionContainer>
)

const StyledSectionContainer = styled(Flex)``

export default FlexSectionContainer
