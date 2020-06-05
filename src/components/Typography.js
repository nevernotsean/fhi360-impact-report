import React from "react"
import styled from "styled-components"
import { Box } from "reflexbox"

export const Lead = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-weight: 400;
`

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
    <h2 className={"section-title"}>{line1}</h2>
    <h3 className={"section-subtitle"}>{line2}</h3>
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
