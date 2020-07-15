import React from "react"
import lerp from "lerp"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { Box } from "rebass/styled-components"
import theme from "./../styles/index"

const mapLinear = (scrollY, startY, endY, scaleStart, scaleEnd) =>
  lerp(scaleStart, scaleEnd, (scrollY - startY) / (endY - startY))

const getWidth = ({ scroll, scrollStart, scrollEnd }) => {
  let width = mapLinear(scroll, scrollStart, scrollEnd, 0, 100)

  width = width >= 100 ? 100 : width
  width = width <= 0 ? 0 : width
  return width
}

const ScrollPercent = ({
  scrollStart,
  scrollEnd,
  scroll,
  enabled,
  ...props
}) => (
  <Box sx={{ width: "100%", position: "relative" }} {...props}>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "16px",
        width: "calc(100% - 32px)",
        height: "2px",
        background: theme.colors.grey,
      }}
    ></Box>
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: "16px",
        height: "2px",
        background: theme.colors.orange,
      }}
      style={{
        width: enabled
          ? `calc(${getWidth({
              scrollStart,
              scrollEnd,
              scroll,
            })}% - 32px)`
          : 0,
      }}
    ></Box>
  </Box>
)

export default ScrollPercent
