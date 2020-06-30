import React from "react"
import { Box } from "rebass/styled-components"
import { Lead } from "../elements/Type"
import Streak from "../assets/svg/streak.svg"
import HandDrawnSVG from "./HandDrawnSVG"
import { P } from "../elements/Type"

const PullQuote = ({
  children,
  streak = Streak,
  fontSize = "48px",
  ...props
}) => {
  return (
    <Box flexDirection={"column"} display={"flex"} mb={"1.45rem"} {...props}>
      <Box>
        <Lead>{props.title}</Lead>
      </Box>
      <Box>
        <P
          lineHeight={1.1}
          fontSize={fontSize}
          className={"serif"}
          children={children}
        ></P>
      </Box>
      <Box width={200}>
        <HandDrawnSVG
          duration={0.25}
          svg={streak}
          className="pullquote-streak"
          overrideLength={[238]}
        ></HandDrawnSVG>
      </Box>
    </Box>
  )
}

export default PullQuote
