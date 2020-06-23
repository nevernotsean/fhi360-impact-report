import React from "react"
import { Lead, H2, H3 } from "../elements/Type"
import { Box } from "rebass/styled-components"

export const splitLockup = ({
  flip,
  divider = 1,
  lead,
  line1,
  line2,
  body,
  ...props
}) => (
  <>
    <Lead>{lead}</Lead>
    <H2 className={"section-title"}>{line1}</H2>
    <H3 className={"section-subtitle"}>{line2}</H3>
    {divider && (
      <div
        className="divider"
        style={{
          borderTop: `${divider}px solid black`,
          marginBottom: "1.45rem",
        }}
      />
    )}
    <Box maxWidth={480}>
      <p className={"section-body"}>{body}</p>
    </Box>
  </>
)
