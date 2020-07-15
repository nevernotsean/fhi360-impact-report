import React from "react"
import lerp from "lerp"
import { LocomotiveContext } from "./../hooks/useLocomotiveScroll"
import { Box } from "rebass/styled-components"
import theme from "./../styles/index"

const mapLinear = (scrollY, startY, endY, scaleStart, scaleEnd) =>
  lerp(scaleStart, scaleEnd, (scrollY - startY) / (endY - startY))

const ScrollPercent = ({
  scrollStart,
  scrollEnd,
  enabled,
  index,
  ...props
}) => {
  const context = React.useContext(LocomotiveContext)

  const [scroll, setScroll] = React.useState(false)
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => setLoaded(true), [])

  React.useEffect(() => {
    setLoaded(true)
    if (context.scroll)
      context.scroll.on("scroll", props => {
        if (enabled) {
          if (!scrollStart || !scrollEnd) return

          let width = mapLinear(props.scroll.y, scrollStart, scrollEnd, 0, 100)

          width = width >= 100 ? 100 : width
          width = width <= 0 ? 0 : width

          // console.log(scrollStart, scrollEnd, 0, 100, width)
          setScroll(width)
        }
      })
  }, [loaded, enabled, scroll])

  return (
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
          width: `calc(${scroll}% - 32px)`,
        }}
      ></Box>
    </Box>
  )
}

export default ScrollPercent
