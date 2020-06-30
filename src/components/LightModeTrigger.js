import React from "react"
import { createGlobalStyle } from "styled-components"
import { Box } from "rebass/styled-components"
import { H2 } from "../elements/Type"
import { useInView } from "react-intersection-observer"

const LightModeTrigger = ({ height = 0 }) => {
  const [ref, inView] = useInView({
    // rootMargin: "90% 0px 10% 0px",
    threshold: 0,
  })

  React.useEffect(() => {
    console.log(inView)
  }, [inView])

  return (
    <Box sx={{ position: "relative", height: 0 }}>
      <HeaderStyle inView={inView}></HeaderStyle>
      <Box
        className="dark-scroll-detect"
        sx={{
          position: "absolute",
          width: "100%",
          height: "100px",
          top: 0,
          left: 0,
          pointerEvents: "none",
          transform: height > 0 && `translateY(calc(100vh - ${height}px))`,
        }}
        ref={ref}
      ></Box>
    </Box>
  )
}

const HeaderStyle = createGlobalStyle`
  ${({ inView, theme }) =>
    inView &&
    `
  .color-detect { 
    color: ${theme.colors.white} !important;
  }
  .fill-detect {
    path { 
      fill: ${theme.colors.white} !important;
    }
  }
  .stroke-detect {
    line { 
      stroke: ${theme.colors.white} !important;
    }
  }
    `}
`

export default LightModeTrigger
