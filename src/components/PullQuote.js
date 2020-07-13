import React from "react"
import { Box } from "rebass/styled-components"
import { Lead } from "../elements/Type"
import { P } from "../elements/Type"
import { Underlined } from "./WordNote"

const PullQuote = ({ children, fontSize = "48px", ...props }) => {
  return (
    <Box flexDirection={"column"} display={"flex"} mb={"1.45rem"} {...props}>
      {props.title && (
        <Box>
          <Lead>{props.title}</Lead>
        </Box>
      )}
      <Box>
        <P lineHeight={1.1} fontSize={fontSize} className={"serif"}>
          {children}
        </P>
      </Box>
    </Box>
  )
}

export default PullQuote
