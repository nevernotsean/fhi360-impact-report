import React from "react"
import { Flex, Box } from "reflexbox"

const FlexSectionContainer = ({
  py = 100,
  px = 20,
  minHeight = "100vh",
  children,
  ...props
}) => (
  <Flex
    flexDirection={"column"}
    justifyContent={"center"}
    alignItems={"center"}
    {...props}
  >
    <Box py={py} px={px} width={1} maxWidth={1200} minHeight={minHeight}>
      {children}
    </Box>
  </Flex>
)

export default FlexSectionContainer
