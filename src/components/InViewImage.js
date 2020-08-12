import React, { useState } from "react"
import styled from "styled-components"
import { Box } from "rebass/styled-components"
import Pattern from "../images/pattern.png"
import Image from "./image.js"

const InViewImage = ({
  src,
  alt = "",
  scrollSpeed = 1,
  imageSpeed = 1,
  revealSpeed = 0.9,
  usePattern,
  pattern = Pattern,
  sx,
  height,
  maxHeight,
  lazyload,
  inViewOverride,
  debug,
  ...props
}) => {
  // const context = React.useContext(LocomotiveContext)
  const [inView, setInView] = useState(
    inViewOverride !== undefined ? inViewOverride : false
  )
  const [showPattern, setTriggerPattern] = useState(false)
  const [dims, setDims] = useState({})

  React.useEffect(() => {
    if (showPattern == false && inView == true && dims.height != undefined)
      setTimeout(() => setTriggerPattern(true), revealSpeed * 1000 + 150)
  }, [showPattern, inView, dims])

  React.useEffect(() => {
    if (debug) console.log(dims)
  }, [dims])

  // React.useEffect(() => {
  //   showPattern &&
  //     console.log(dims.height != undefined, showPattern, "showPattern")
  // }, [showPattern])

  return (
    <Container
      data-scroll
      data-scroll-speed={scrollSpeed}
      h={inView ? dims.height : 0}
      sx={sx}
      revealSpeed={revealSpeed}
      style={{ position: usePattern && "relative" }}
      inView={inView}
      showPattern={showPattern}
      height={height}
    >
      <div className="mask">
        <Box data-scroll data-scroll-speed={-imageSpeed}>
          <Image
            src={src}
            alt={alt}
            onLoad={d => setDims(d)}
            onInView={() =>
              setInView(inViewOverride !== undefined ? inViewOverride : true)
            }
            maxHeight={maxHeight}
            lazyload={lazyload}
            debug={debug}
            {...props}
          ></Image>
        </Box>
      </div>
      {usePattern && (
        <Box
          className={"pattern"}
          style={{
            position: "absolute",
            zIndex: -1,
            top: "0",
            left: 0,
            width: dims.width + "px",
            height: dims.height + "px",
            background: `url(${pattern})`,
          }}
        ></Box>
      )}
    </Container>
  )
}

const Container = styled(Box)`
  .mask {
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${({ revealSpeed }) =>
      revealSpeed !== 0 && `transition: height ${revealSpeed}s ease 300ms`};

    img {
      width: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    ${({ h }) =>
      `
      height: ${h !== undefined ? h : 0}px;
      
      .mask {
        height: ${h !== undefined ? h : 0}px;
      }
    `}
  }

  .pattern {
    opacity: 0;
    opacity: ${({ showPattern }) => showPattern && 1};

    transition: transform 0.33s ease-out;

    ${({ showPattern, h }) =>
      h !== undefined && showPattern && `transform: translate(30px, -30px);`}

    ${({ showPattern, theme }) =>
      showPattern &&
      `@media screen and (max-width: ${theme.breakpoints[0]}) {  transform: translate(15px, -15px);  }`};
  }
`
export default InViewImage
