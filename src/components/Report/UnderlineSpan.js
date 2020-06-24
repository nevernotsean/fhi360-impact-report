import React from "react"

const UnderlineSpan = () => {
  return (
    <span style={{ position: "relative" }}>
      underserved.
      <Box
        sx={{
          left: 0,
          width: "100px",
          position: "absolute",
          transform: "translateY(-60%)",
          zIndex: -1,
        }}
      >
        <HandDrawnSVG svg={Circle} duration={0.3} delay={1}></HandDrawnSVG>
      </Box>
    </span>
  )
}

export default UnderlineSpan
