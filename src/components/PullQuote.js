import React from "react"
import { Flex, Box } from "reflexbox"
import styled from "styled-components"
import { Lead } from "./Typography"
import Streak from "../assets/svg/streak.svg"
import HandDrawnSVG from "./HandDrawnSVG"

const PullQuote = ({ children, ...props }) => {
  return (
    <Flex flexDirection={"column"} {...props}>
      <Box>
        <Lead>{props.title}</Lead>
      </Box>
      <Box>
        <p
          style={{
            fontSize: "48px",
            lineHeight: 1,
          }}
          children={children}
        ></p>
      </Box>
      <Box width={200}>
        <HandDrawnSVG
          duration={0.25}
          svg={Streak}
          className="pullquote-streak"
        ></HandDrawnSVG>
      </Box>
    </Flex>
  )
}

export default PullQuote
