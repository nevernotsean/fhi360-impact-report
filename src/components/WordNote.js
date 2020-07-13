import React from "react"

import { Box } from "rebass/styled-components"
import HandDrawnSVG from "../components/HandDrawnSVG"

import useDimensions from "react-use-dimensions"

import Streak from "./svg/Streak"
import Circle from "./svg/Circle"

const WordNote = ({
  children,
  sx,
  style,
  svg,
  y,
  delay = 1,
  orange,
  transform,
  width,
  ...props
}) => {
  const [ref, { width: w }] = useDimensions()

  return (
    <span style={{ position: "relative" }}>
      <span ref={ref}>{children}</span>
      <Box
        sx={{
          top: "50%",
          left: 0,
          width: w * 1.15 || width || "80px",
          position: "absolute",
          transform: transform,
          zIndex: 1,
          ...sx,
        }}
        style={style}
      >
        <HandDrawnSVG
          svg={svg}
          duration={0.3}
          delay={delay}
          orange={orange}
          {...props}
        ></HandDrawnSVG>
      </Box>
    </span>
  )
}

export const Underlined = props => (
  <WordNote svg={Streak} transform={`translateY(20%)`} {...props} />
)

export const Circled = props => (
  <WordNote svg={Circle} transform={`translateY(-25%)`} {...props} />
)
