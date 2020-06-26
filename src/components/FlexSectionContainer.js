import React from "react"
import { Flex, Box } from "rebass/styled-components"

const FlexSectionContainer = ({
  py = 100,
  px = 20,
  minHeight = "100vh",
  children,
  centered,
  ...props
}) => (
  <Box
    py={py}
    px={px}
    width={1}
    maxWidth={1200}
    mx={"auto"}
    minHeight={minHeight}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={centered && "center"}
    {...props}
  >
    {children}
  </Box>
)

export default FlexSectionContainer
