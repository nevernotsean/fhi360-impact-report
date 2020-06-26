import React from "react"
import styled from "styled-components"
import { Text, Heading } from "rebass/styled-components"

export const H1 = props => (
  <Heading
    fontWeight={900}
    fontSize={[28, 88]}
    lineHeight={["24px", "82px"]}
    {...props}
  />
)
export const H2 = props => (
  <Heading
    fontWeight={900}
    fontSize={[28, 68]}
    lineHeight={["24px", "64px"]}
    {...props}
  />
)
export const H3 = props => (
  <Heading
    fontWeight={400}
    lineHeight={[1, "33px"]}
    fontSize={[16, 24]}
    {...props}
  />
)

export const Lead = props => (
  <Heading
    fontWeight={"400"}
    fontSize={"14px"}
    letterSpacing={"5px"}
    mb={["25px", "75px"]}
    sx={{ textTransform: "uppercase" }}
    {...props}
  />
)

export const P = props => <Text {...props}></Text>

export default {}
